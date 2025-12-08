import { Phone, MessageCircle } from "lucide-react";
import { airbnbConfig } from "@/config/airbnbConfig";
import heroImage from "@/assets/hero-loft.jpg";

const HeroSection = () => {
  const { telefono, telefonoWhatsApp, nombreAlojamiento, ciudad, mensajeWhatsApp } = airbnbConfig;

  const whatsappUrl = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

  if (!telefono) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-muted">
        <div className="text-center p-8">
          <p className="text-lg text-muted-foreground">
            Configura el número de contacto del Airbnb en el archivo de configuración.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-end pb-12 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={`Vista del ${nombreAlojamiento} en ${ciudad}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement!.classList.add("bg-muted");
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 max-w-6xl mx-auto">
        <div className="animate-slide-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-primary/90 text-primary-foreground rounded-full">
            {ciudad}
          </span>
        </div>
        
        <h1 
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-4 animate-slide-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          {nombreAlojamiento}
        </h1>
        
        <p 
          className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-slide-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Tu escape urbano perfecto con vistas impresionantes
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 animate-slide-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <a href={`tel:${telefono.replace(/\s/g, "")}`} className="btn-primary">
            <Phone className="w-5 h-5" />
            Llamar ahora
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        <p 
          className="mt-6 text-primary-foreground/80 text-sm animate-slide-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          {telefono}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
