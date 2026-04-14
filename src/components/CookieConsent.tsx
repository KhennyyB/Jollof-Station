import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CONSENT_KEY = "jollofstation_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (value: string) => {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
    setShowPrefs(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      {showPrefs ? (
        <div className="container max-w-lg mx-auto bg-card border border-border rounded-lg shadow-xl p-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-display font-bold text-lg">Cookie Preferences</h3>
            <button onClick={() => setShowPrefs(false)} aria-label="Close"><X size={20} /></button>
          </div>
          <div className="space-y-4 mb-6">
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium">Essential Cookies</span>
              <input type="checkbox" checked disabled className="w-5 h-5 accent-primary" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm font-medium">Analytics Cookies</span>
              <input type="checkbox" checked={analytics} onChange={() => setAnalytics(!analytics)} className="w-5 h-5 accent-primary" />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm font-medium">Marketing Cookies</span>
              <input type="checkbox" checked={marketing} onChange={() => setMarketing(!marketing)} className="w-5 h-5 accent-primary" />
            </label>
          </div>
          <Button onClick={() => saveConsent(JSON.stringify({ essential: true, analytics, marketing }))} className="w-full">
            Save Preferences
          </Button>
        </div>
      ) : (
        <div className="container max-w-3xl mx-auto bg-card border border-border rounded-lg shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 animate-fade-in">
          <p className="text-sm flex-1">
            We use cookies to improve your experience on JollofStation. By continuing, you accept our{" "}
            <Link to="/cookie-policy" className="text-primary underline">Cookie Policy</Link>.
          </p>
          <div className="flex flex-wrap gap-2 shrink-0">
            <Button size="sm" onClick={() => saveConsent("accepted")}>Accept All</Button>
            <Button size="sm" variant="outline" onClick={() => setShowPrefs(true)}>Manage Preferences</Button>
            <button onClick={() => saveConsent("declined")} className="text-sm text-muted-foreground underline px-2">Decline</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
