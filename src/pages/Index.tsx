import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import FloatingContactForm from "@/components/FloatingContactForm";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import ManifestoSection from "@/components/scroll/ManifestoSection";
import HorizontalShowcase from "@/components/scroll/HorizontalShowcase";
import ZoomReveal from "@/components/scroll/ZoomReveal";
import { initGSAPAnimations } from "@/hooks/useGSAP";

const Index = () => {
  useEffect(() => {
    // Initialize all GSAP animations
    const timer = setTimeout(() => {
      initGSAPAnimations();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-x-clip">
      <SmoothScroll />
      {/* Scroll progress bar */}
      <div className="scroll-progress fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-[100] origin-left scale-x-0" />
      
      {/* Cursor glow effect */}
      <div className="cursor-glow fixed w-64 h-64 rounded-full pointer-events-none z-[60] opacity-30 blur-3xl bg-primary/30 -translate-x-1/2 -translate-y-1/2 hidden lg:block" />
      
      <Navbar />
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <HorizontalShowcase />
      <ProcessSection />
      <WhyUsSection />
      <ZoomReveal />
      <TechStackSection />
      <CTASection />
      <Footer />
      <FloatingContactForm />
    </main>
  );
};

export default Index;
