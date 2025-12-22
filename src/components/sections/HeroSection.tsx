import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating orbs animation
      gsap.to(orb1Ref.current, {
        y: 30,
        x: 20,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(orb2Ref.current, {
        y: -25,
        x: -15,
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Hero elements entrance
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-title .gradient-text",
          { backgroundPosition: "-200% center" },
          { backgroundPosition: "200% center", duration: 2, ease: "none" },
          "-=0.8"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=1.2"
        )
        .fromTo(
          ".hero-buttons button",
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" },
          "-=0.6"
        )
        .fromTo(
          ".hero-stat",
          { opacity: 0, y: 30, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
          "-=0.4"
        );

      // Continuous gradient animation
      gsap.to(".hero-title .gradient-text", {
        backgroundPosition: "200% center",
        duration: 5,
        ease: "none",
        repeat: -1,
      });

      // Stats counter animation
      document.querySelectorAll(".hero-stat-value").forEach((stat) => {
        const value = stat.textContent || "";
        if (value.includes("+")) {
          const num = parseInt(value);
          gsap.fromTo(
            stat,
            { innerText: 0 },
            {
              innerText: num,
              duration: 2,
              delay: 1.5,
              ease: "power2.out",
              snap: { innerText: 1 },
              onUpdate: function () {
                stat.textContent = Math.floor(Number(this.targets()[0].innerText)) + "+";
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated orbs */}
      <div
        ref={orb1Ref}
        className="floating-orb absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"
      />
      <div
        ref={orb2Ref}
        className="floating-orb absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"
      />
      
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
          <div className="hero-badge mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass/50 backdrop-blur-sm border border-glass-border text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Now building AI-powered systems
            </span>
          </div>

          {/* Main headline */}
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            We Build{" "}
            <span className="gradient-text bg-[length:200%_auto]">Automated Systems</span>
            <br />
            That Run Your Business
          </h1>

          {/* Sub-headline */}
          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            Websites, AI agents, CRM systems and SaaS platforms — designed for efficiency, built to scale, engineered for growth.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4">
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
          <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "System Uptime" },
            ].map((stat, index) => (
              <div key={index} className="hero-stat text-center">
                <div className="hero-stat-value text-2xl md:text-4xl font-bold gradient-text">{stat.value}</div>
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
