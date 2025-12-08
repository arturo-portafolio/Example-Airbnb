import { Phone, MessageCircle } from "lucide-react";
import { airbnbConfig } from "@/config/airbnbConfig";

const CTASection = () => {
  const { telefono, telefonoWhatsApp, mensajeWhatsApp } = airbnbConfig;
  
  const whatsappUrl = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

  if (!telefono) return null;

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
          ¿Listo para reservar?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8">
          Contáctanos ahora y asegura tu estancia en este increíble loft
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${telefono.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium bg-primary-foreground text-primary rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            {telefono}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="w-5 h-5" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
