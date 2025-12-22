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
      // Section header
      gsap.fromTo(
        ".process-header",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Connection line animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Process steps with stagger
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        
        gsap.fromTo(
          step,
          {
            opacity: 0,
            x: direction * 80,
            scale: 0.8,
            rotateY: direction * 20,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Number animation
        const numberEl = step.querySelector(".step-number");
        if (numberEl) {
          gsap.fromTo(
            numberEl,
            { scale: 0, rotation: -180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              delay: index * 0.2 + 0.3,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: step,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Icon pulse animation on scroll
        const iconEl = step.querySelector(".step-icon");
        if (iconEl) {
          gsap.fromTo(
            iconEl,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              delay: index * 0.2 + 0.4,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: step,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Continuous floating animation for icons
      gsap.to(".step-icon-container", {
        y: -5,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="process-header text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From Concept to{" "}
            <span className="gradient-text">Launch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven methodology that delivers results on time, every time.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative" style={{ perspective: "1000px" }}>
          {/* Connection line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 -translate-y-1/2 origin-left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="process-step relative group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Card */}
                <div className="glass-card p-8 text-center h-full transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                  {/* Step number with glow */}
                  <div className="step-icon-container relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="step-icon relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div className="step-number absolute top-4 right-4 text-4xl font-bold text-glass-border/50 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
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
