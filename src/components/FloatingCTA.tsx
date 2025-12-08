import { Phone, MessageCircle } from "lucide-react";
import { airbnbConfig } from "@/config/airbnbConfig";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const { telefono, telefonoWhatsApp, mensajeWhatsApp } = airbnbConfig;
  const [isVisible, setIsVisible] = useState(false);
  
  const whatsappUrl = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 50% of viewport height
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!telefono || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <div className="flex gap-3 p-3 bg-card rounded-2xl shadow-lg border border-border">
        <a
          href={`tel:${telefono.replace(/\s/g, "")}`}
          className="flex-1 btn-primary py-3 text-base"
        >
          <Phone className="w-5 h-5" />
          Llamar
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn-whatsapp py-3 text-base"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
