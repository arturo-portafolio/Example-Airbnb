import { MapPin } from "lucide-react";
import { airbnbConfig } from "@/config/airbnbConfig";

const LocationSection = () => {
  const { ciudad, textoUbicacion } = airbnbConfig;

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-4">Ubicación</h2>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="text-lg text-muted-foreground">{ciudad}</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {textoUbicacion}
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                A 5 minutos del Parque México
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Cerca de estaciones de metro y metrobús
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Rodeado de restaurantes y cafés
              </li>
            </ul>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15048.929854846!2d-99.17397!3d19.41027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sLa%20Condesa%2C%20Mexico%20City%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Airbnb en La Condesa, Ciudad de México"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
