import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { airbnbConfig } from "@/config/airbnbConfig";

const Index = () => {
  const { nombreAlojamiento, ciudad } = airbnbConfig;

  return (
    <>
      <head>
        <title>{nombreAlojamiento} | Airbnb en {ciudad}</title>
        <meta
          name="description"
          content={`${nombreAlojamiento} - Alojamiento moderno con vista panorámica en ${ciudad}. Reserva ahora y vive una experiencia única.`}
        />
      </head>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <DescriptionSection />
        <AmenitiesSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
        <CTASection />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
};

export default Index;
