import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow animation-delay-200" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up opacity-0 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass/50 backdrop-blur-sm border border-glass-border text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Now building AI-powered systems
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up opacity-0 animation-delay-100 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            We Build{" "}
            <span className="gradient-text">Automated Systems</span>
            <br />
            That Run Your Business
          </h1>

          {/* Sub-headline */}
          <p className="animate-fade-up opacity-0 animation-delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            Websites, AI agents, CRM systems and SaaS platforms — designed for efficiency, built to scale, engineered for growth.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up opacity-0 animation-delay-300 flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Play className="w-5 h-5" />
              See How It Works
            </Button>
          </div>

          {/* Stats or social proof */}
          <div className="animate-fade-up opacity-0 animation-delay-400 mt-16 grid grid-cols-3 gap-8 md:gap-16">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "System Uptime" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
