import { Star } from "lucide-react";
import { airbnbConfig } from "@/config/airbnbConfig";

const TestimonialsSection = () => {
  const { testimonios } = airbnbConfig;

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-12">
          Lo que dicen nuestros huéspedes
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="card-elegant"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>
              
              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                "{testimonio.texto}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  {testimonio.avatar}
                </div>
                <span className="font-medium text-foreground">
                  {testimonio.nombre}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
