import { airbnbConfig } from "@/config/airbnbConfig";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

const AmenitiesSection = () => {
  const { amenities } = airbnbConfig;

  const getIcon = (iconName: string): LucideIcon => {
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    return icons[iconName] || LucideIcons.Check;
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-12">Comodidades</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = getIcon(amenity.icono);
            return (
              <div
                key={index}
                className="card-elegant flex flex-col items-center text-center p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-sage" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground">
                  {amenity.titulo}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
