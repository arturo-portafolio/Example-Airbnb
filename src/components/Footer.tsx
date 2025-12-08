import { Phone, MessageCircle, MapPin } from "lucide-react";
import { airbnbConfig } from "@/config/airbnbConfig";

const Footer = () => {
  const { telefono, telefonoWhatsApp, nombreAlojamiento, ciudad, mensajeWhatsApp } = airbnbConfig;
  
  const whatsappUrl = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

  return (
    <footer className="py-12 px-4 md:px-8 bg-charcoal text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-2">
              {nombreAlojamiento}
            </h3>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4" />
              <span>{ciudad}</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={`tel:${telefono.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                {telefono}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Reserva ahora</h4>
            <p className="text-primary-foreground/70 text-sm">
              Contáctanos directamente para consultar disponibilidad y precios. 
              Respuesta rápida garantizada.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} {nombreAlojamiento}. {ciudad}, México.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
