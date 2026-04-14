import { WhatsAppIcon } from "@/components/icons";

const WHATSAPP_URL = "https://wa.me/2349029757023";

const FloatingOrderButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white hover:bg-[#1da851] flex items-center justify-center shadow-lg hover:scale-110 transition-all animate-bounce-subtle"
      aria-label="Order Now on WhatsApp"
    >
      <WhatsAppIcon size={24} />
    </a>
  );
};

export default FloatingOrderButton;
