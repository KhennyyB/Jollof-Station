/**
 * Minimal package installer — uses Node built-ins only (https + zlib + fs).
 * Usage: node scripts/install-pkg.cjs <package[@version]> ...
 */
const https = require("https");
const zlib = require("zlib");
const fs = require("fs");
const path = require("path");

const NM = path.resolve(__dirname, "..", "node_modules");

function get(url) {
  return new Promise((resolve, reject) => {
    const follow = (u) =>
      https.get(u, { headers: { "User-Agent": "node" } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) return follow(res.headers.location);
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      }).on("error", reject);
    follow(url);
  });
}

function parseTar(buf) {
  const files = [];
  let offset = 0;
  while (offset + 512 <= buf.length) {
    const header = buf.slice(offset, offset + 512);
    if (header.every((b) => b === 0)) break;
    const nameRaw = header.slice(0, 100).toString("utf8").replace(/\0/g, "");
    const prefix = header.slice(345, 500).toString("utf8").replace(/\0/g, "");
    const name = prefix ? `${prefix}/${nameRaw}` : nameRaw;
    const size = parseInt(header.slice(124, 135).toString("utf8").trim(), 8) || 0;
    const type = header[156]; // Buffer index returns a number (byte value)
    offset += 512;
    // 48 = ASCII '0' (regular file), 0 = old-style regular file
    if (type === 48 || type === 0) files.push({ name, data: buf.slice(offset, offset + size) });
    offset += Math.ceil(size / 512) * 512;
  }
  return files;
}

async function fetchMeta(name) {
  const buf = await get(`https://registry.npmjs.org/${name.replace("/", "%2F")}`);
  return JSON.parse(buf.toString());
}

async function installOne(pkgSpec, installed) {
  // Parse name@version — handle scoped packages like @img/sharp
  let name, version;
  if (pkgSpec.startsWith("@")) {
    const parts = pkgSpec.slice(1).split("@");
    name = "@" + parts[0];
    version = parts[1] || "latest";
  } else {
    const parts = pkgSpec.split("@");
    name = parts[0];
    version = parts[1] || "latest";
  }

  const destDir = path.join(NM, ...name.split("/"));
  if (fs.existsSync(path.join(destDir, "package.json"))) {
    const existing = JSON.parse(fs.readFileSync(path.join(destDir, "package.json"), "utf8"));
    console.log(`  skip ${name}@${existing.version} (already installed)`);
    return;
  }

  const meta = await fetchMeta(name);
  const resolved = version === "latest" ? meta["dist-tags"].latest : (meta.versions[version] ? version : meta["dist-tags"].latest);
  const vMeta = meta.versions[resolved];
  if (!vMeta) throw new Error(`No version ${version} for ${name}`);

  console.log(`  installing ${name}@${resolved} ...`);
  const tgz = await get(vMeta.dist.tarball);
  const tar = await new Promise((res, rej) => zlib.gunzip(tgz, (e, b) => e ? rej(e) : res(b)));
  const files = parseTar(tar);

  for (const file of files) {
    const rel = file.name.replace(/^[^/]+\//, "");
    if (!rel) continue;
    const dest = path.join(destDir, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, file.data);
  }

  for (const [dep, range] of Object.entries(vMeta.dependencies || {})) {
    if (!installed.has(dep)) {
      installed.add(dep);
      await installOne(dep, installed);
    }
  }
  console.log(`  ✓ ${name}@${resolved}`);
}

(async () => {
  const pkgs = process.argv.slice(2);
  if (!pkgs.length) { console.error("Usage: node scripts/install-pkg.cjs <pkg>..."); process.exit(1); }
  const installed = new Set(pkgs.map(p => p.startsWith("@") ? p.split("@").slice(0,2).join("@") + p.split("@")[2] : p.split("@")[0]));
  for (const p of pkgs) await installOne(p, installed);
  console.log("\nAll done.");
})().catch(e => { console.error(e); process.exit(1); });
