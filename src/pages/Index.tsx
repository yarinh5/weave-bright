import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import FloatingContactForm from "@/components/FloatingContactForm";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <TechStackSection />
      <CTASection />
      <Footer />
      <FloatingContactForm />
    </main>
  );
};

export default Index;
