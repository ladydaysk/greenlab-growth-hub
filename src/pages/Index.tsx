import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MethodSection from "@/components/MethodSection";
import ServicesSection from "@/components/ServicesSection";

import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <MethodSection />
      <ServicesSection />
      
      <FaqSection />
      <FooterSection />
    </div>
  );
};

export default Index;
