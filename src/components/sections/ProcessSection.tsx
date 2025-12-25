import { useEffect, useRef } from "react";
import { Compass, PenTool, Rocket, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Strategy & Architecture",
    description: "We analyze your business needs and design a comprehensive technical roadmap.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "System Design",
    description: "Creating detailed specifications and wireframes for your custom solution.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Development & Automation",
    description: "Building your system with clean code, integrations, and automated workflows.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Launch & Scale",
    description: "Deploying your solution and providing ongoing support for growth.",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section badge animation
      gsap.fromTo(
        ".process-badge",
        { opacity: 0, y: 30, scale: 0.8, rotateZ: -5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateZ: 0,
          duration: 0.8,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ".process-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Section title with reveal effect
      gsap.fromTo(
        ".process-title",
        { opacity: 0, y: 80, skewY: 5 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".process-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtitle fade in
      gsap.fromTo(
        ".process-subtitle",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Connection line draw animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Line glow pulse
      gsap.to(".process-line-glow", {
        opacity: 0.8,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Process steps with advanced 3D animation
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        
        gsap.fromTo(
          step,
          {
            opacity: 0,
            x: direction * 120,
            y: 60,
            scale: 0.7,
            rotateY: direction * 30,
            rotateZ: direction * 5,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateY: 0,
            rotateZ: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Number flip animation
        const numberEl = step.querySelector(".step-number");
        if (numberEl) {
          gsap.fromTo(
            numberEl,
            { scale: 0, rotation: -360, opacity: 0 },
            {
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.2 + 0.4,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: step,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Icon bounce animation
        const iconEl = step.querySelector(".step-icon");
        if (iconEl) {
          gsap.fromTo(
            iconEl,
            { scale: 0, y: 30 },
            {
              scale: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.2 + 0.5,
              ease: "elastic.out(1, 0.5)",
              scrollTrigger: {
                trigger: step,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Card hover effects
        const card = step.querySelector(".process-card");
        if (card) {
          step.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -15,
              scale: 1.03,
              boxShadow: "0 30px 60px rgba(139, 92, 246, 0.3)",
              duration: 0.4,
              ease: "power2.out",
            });
            gsap.to(step.querySelector(".step-icon"), {
              rotate: 15,
              scale: 1.2,
              duration: 0.4,
              ease: "back.out(2)",
            });
            gsap.to(step.querySelector(".step-icon-glow"), {
              opacity: 1,
              scale: 1.5,
              duration: 0.4,
            });
          });

          step.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "none",
              duration: 0.4,
              ease: "power2.out",
            });
            gsap.to(step.querySelector(".step-icon"), {
              rotate: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
            gsap.to(step.querySelector(".step-icon-glow"), {
              opacity: 0,
              scale: 1,
              duration: 0.4,
            });
          });
        }
      });

      // Continuous floating animation for icons
      gsap.to(".step-icon-container", {
        y: -8,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.4,
          from: "start",
        },
      });

      // Background particles floating
      gsap.utils.toArray<HTMLElement>(".process-particle").forEach((particle, i) => {
        gsap.to(particle, {
          y: "random(-40, 40)",
          x: "random(-30, 30)",
          rotation: "random(-180, 180)",
          duration: "random(4, 8)",
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.5,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="process-container relative py-24 md:py-32 overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="process-particle absolute top-1/4 left-1/4 w-3 h-3 bg-primary/20 rounded-full" />
        <div className="process-particle absolute top-1/3 right-1/3 w-2 h-2 bg-accent/20 rounded-full" />
        <div className="process-particle absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary/15 rounded-full" />
        <div className="process-particle absolute top-1/2 right-1/4 w-2 h-2 bg-accent/25 rounded-full" />
      </div>

      {/* Background gradient accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 md:px-6 relative">
        {/* Section header */}
        <div className="process-header text-center max-w-3xl mx-auto mb-20">
          <span className="process-badge inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
            Our Process
          </span>
          <h2 className="process-title text-3xl md:text-5xl font-bold mb-6">
            From Concept to{" "}
            <span className="gradient-text">Launch</span>
          </h2>
          <p className="process-subtitle text-muted-foreground text-lg">
            A proven methodology that delivers results on time, every time.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative" style={{ perspective: "1200px" }}>
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2">
            <div
              ref={lineRef}
              className="h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 origin-left relative"
            >
              <div className="process-line-glow absolute inset-0 blur-sm bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="process-step relative group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Card */}
                <div className="process-card glass-card p-8 text-center h-full transition-all duration-500 hover:border-primary/30 cursor-pointer">
                  {/* Step number with glow */}
                  <div className="step-icon-container relative inline-flex mb-6">
                    <div className="step-icon-glow absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-0 transition-all duration-500" />
                    <div className="step-icon relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-300">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div className="step-number absolute top-4 right-4 text-4xl font-bold text-glass-border/50 group-hover:text-primary/30 transition-colors duration-300">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
