import { airbnbConfig } from "@/config/airbnbConfig";

const DescriptionSection = () => {
  const { nombreAlojamiento, descripcionCorta } = airbnbConfig;

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">Sobre {nombreAlojamiento}</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {descripcionCorta}
        </p>
      </div>
    </section>
  );
};

export default DescriptionSection;
