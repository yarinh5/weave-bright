import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const sparkleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          scale: 0.85,
          y: 80,
          rotateX: 15,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Badge animation
      gsap.fromTo(
        ".cta-badge",
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Title animation
      gsap.fromTo(
        ".cta-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Description animation
      gsap.fromTo(
        ".cta-description",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Buttons stagger animation
      gsap.fromTo(
        ".cta-buttons button",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Trust indicators animation
      gsap.fromTo(
        ".cta-trust",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Sparkle floating animation
      gsap.to(sparkleRef.current, {
        y: -10,
        x: 5,
        rotation: 15,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Gradient border animation
      gsap.to(".cta-border-top", {
        backgroundPosition: "200% 0",
        duration: 3,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".cta-border-bottom", {
        backgroundPosition: "-200% 0",
        duration: 3,
        ease: "none",
        repeat: -1,
      });

      // Background orbs floating
      gsap.to(".cta-orb-1", {
        x: 50,
        y: -30,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".cta-orb-2", {
        x: -40,
        y: 20,
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="cta-orb-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
        <div className="cta-orb-2 absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative px-4 md:px-6">
        <div className="max-w-4xl mx-auto" style={{ perspective: "1000px" }}>
          <div
            ref={cardRef}
            className="cta-card glass-card p-12 md:p-16 text-center relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Decorative elements */}
            <div
              className="cta-border-top absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{ backgroundSize: "200% 100%" }}
            />
            <div
              className="cta-border-bottom absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
              style={{ backgroundSize: "200% 100%" }}
            />
            
            {/* Floating sparkle */}
            <div ref={sparkleRef} className="absolute top-8 right-8 text-primary">
              <Sparkles className="w-8 h-8" />
            </div>

            <span className="cta-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
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
              <Button variant="hero" size="xl">
                Start Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Schedule a Call
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="cta-trust mt-12 pt-8 border-t border-glass-border">
              <p className="text-sm text-muted-foreground">
                No commitment required • Free consultation • Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
