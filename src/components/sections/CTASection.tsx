import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main card epic entrance with 3D effect
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      mainTl
        .fromTo(
          cardRef.current,
          {
            opacity: 0,
            scale: 0.7,
            y: 150,
            rotateX: 30,
            rotateY: -10,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 1.4,
            ease: "power4.out",
          }
        )
        .fromTo(
          ".cta-badge",
          { opacity: 0, y: 30, scale: 0.8, rotateZ: -5 },
          { opacity: 1, y: 0, scale: 1, rotateZ: 0, duration: 0.7, ease: "back.out(2)" },
          "-=0.8"
        )
        .fromTo(
          ".cta-title",
          { opacity: 0, y: 60, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" },
          { 
            opacity: 1, 
            y: 0, 
            clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".cta-description",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".cta-buttons button",
          { opacity: 0, y: 40, scale: 0.8 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            duration: 0.6, 
            stagger: 0.15, 
            ease: "back.out(2)" 
          },
          "-=0.4"
        )
        .fromTo(
          ".cta-trust",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );

      // Floating decorative elements
      gsap.to(".cta-sparkle", {
        y: -15,
        x: 8,
        rotation: 25,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });

      gsap.to(".cta-star", {
        y: 12,
        x: -6,
        rotation: -15,
        scale: 1.1,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".cta-zap", {
        y: -10,
        rotation: 10,
        duration: 1.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Animated gradient borders
      gsap.to(".cta-border-top", {
        backgroundPosition: "200% 0",
        duration: 2.5,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".cta-border-bottom", {
        backgroundPosition: "-200% 0",
        duration: 2.5,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".cta-border-left", {
        backgroundPosition: "0 200%",
        duration: 2.5,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".cta-border-right", {
        backgroundPosition: "0 -200%",
        duration: 2.5,
        ease: "none",
        repeat: -1,
      });

      // Background orbs floating with more dynamic movement
      gsap.to(".cta-orb-1", {
        x: 80,
        y: -50,
        scale: 1.2,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".cta-orb-2", {
        x: -60,
        y: 40,
        scale: 0.9,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".cta-orb-3", {
        x: 40,
        y: 60,
        rotation: 180,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Pulse animation for badge dot
      gsap.to(".cta-pulse", {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        repeat: -1,
      });

      // Button hover magnetic effect
      const buttons = document.querySelectorAll('.cta-buttons button');
      buttons.forEach((btn) => {
        btn.addEventListener('mousemove', (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = (btn as HTMLElement).getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left - rect.width / 2;
          const y = mouseEvent.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { 
            x: x * 0.2, 
            y: y * 0.2, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { 
            x: 0, 
            y: 0, 
            duration: 0.5, 
            ease: "elastic.out(1, 0.5)" 
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cta-section relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="cta-orb-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[180px]" />
        <div className="cta-orb-2 absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]" />
        <div className="cta-orb-3 absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
      </div>

      <div className="container relative px-4 md:px-6">
        <div className="max-w-4xl mx-auto" style={{ perspective: "1200px" }}>
          <div
            ref={cardRef}
            className="cta-card glass-card p-12 md:p-16 text-center relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Animated border lines */}
            <div
              className="cta-border-top absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{ backgroundSize: "200% 100%" }}
            />
            <div
              className="cta-border-bottom absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
              style={{ backgroundSize: "200% 100%" }}
            />
            <div
              className="cta-border-left absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent"
              style={{ backgroundSize: "100% 200%" }}
            />
            <div
              className="cta-border-right absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent"
              style={{ backgroundSize: "100% 200%" }}
            />
            
            {/* Floating decorative icons */}
            <div className="cta-sparkle absolute top-8 right-8 text-primary">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="cta-star absolute top-12 left-12 text-accent">
              <Star className="w-6 h-6" />
            </div>
            <div className="cta-zap absolute bottom-12 right-16 text-primary/70">
              <Zap className="w-7 h-7" />
            </div>

            <span className="cta-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 relative">
              <span className="relative w-2 h-2">
                <span className="absolute inset-0 bg-primary rounded-full animate-pulse" />
                <span className="cta-pulse absolute inset-0 bg-primary rounded-full" />
              </span>
              Let's Build Something Amazing
            </span>

            <h2 className="cta-title text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to{" "}
              <span className="gradient-text">Automate</span>
              <br />
              Your Business?
            </h2>

            <p className="cta-description text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Book a free strategy call and discover how we can transform your operations with custom automation systems.
            </p>

            <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="magnetic-btn">
                Start Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl" className="magnetic-btn">
                Schedule a Call
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="cta-trust mt-12 pt-8 border-t border-glass-border">
              <p className="text-sm text-muted-foreground">
                No commitment required • Free consultation • Response within 24 hours
              </p>
            </div>

            {/* Corner glow effects */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
