import { useEffect, useRef } from "react";
import { Globe, Workflow, Code2, Bot, Users, FileText } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: "Automated Websites",
    description: "High-performance websites with built-in automation and analytics",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads for your business",
  },
  {
    icon: Workflow,
    title: "Business Automations",
    description: "Streamline operations with Make, n8n, and custom API integrations",
  },
  {
    icon: Code2,
    title: "Custom SaaS Platforms",
    description: "Scalable software solutions tailored to your unique business needs",
  },
  {
    icon: Bot,
    title: "AI Agents & Workflows",
    description: "Intelligent automation powered by cutting-edge AI technology",
  },
  {
    icon: Users,
    title: "CRM & Lead Management",
    description: "Comprehensive systems to capture, nurture, and convert leads",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge entrance with bounce
      gsap.fromTo(
        ".services-badge",
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ".services-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Title with letter split effect
      gsap.fromTo(
        ".services-title",
        { opacity: 0, y: 80, skewY: 5 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".services-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtitle fade in
      gsap.fromTo(
        ".services-subtitle",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger animation with 3D flip effect
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 120,
            rotateX: 60,
            rotateY: (col - 1) * 15,
            scale: 0.7,
            transformOrigin: "center bottom",
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Advanced hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -15,
            scale: 1.05,
            rotateY: 5,
            boxShadow: "0 30px 60px rgba(139, 92, 246, 0.35)",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".service-icon"), {
            scale: 1.3,
            rotate: 15,
            duration: 0.4,
            ease: "back.out(2)",
          });
          gsap.to(card.querySelector(".service-icon-container"), {
            background: "linear-gradient(135deg, hsl(262 83% 58% / 0.4), hsl(192 91% 54% / 0.4))",
            duration: 0.3,
          });
          gsap.to(card.querySelector(".service-arrow"), {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotateY: 0,
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".service-icon"), {
            scale: 1,
            rotate: 0,
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".service-icon-container"), {
            background: "linear-gradient(135deg, hsl(262 83% 58% / 0.2), hsl(192 91% 54% / 0.2))",
            duration: 0.3,
          });
          gsap.to(card.querySelector(".service-arrow"), {
            x: 10,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Floating icons pulse animation
      gsap.to(".service-icon-container", {
        y: 8,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.3,
          from: "random",
        },
      });

      // Background glow animation
      gsap.to(".services-glow", {
        opacity: 0.6,
        scale: 1.2,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="services-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative">
        {/* Section header */}
        <div ref={headerRef} className="services-header text-center max-w-3xl mx-auto mb-16">
          <span className="services-badge inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
            What We Build
          </span>
          <h2 className="services-title text-3xl md:text-5xl font-bold mb-6">
            End-to-End{" "}
            <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="services-subtitle text-muted-foreground text-lg">
            From automated websites to AI-powered systems, we build everything your business needs to thrive in the digital age.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative glass-card p-8 glow-effect transition-all duration-500 hover:border-primary/30 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Icon container */}
              <div className="service-icon-container w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 transition-all duration-300">
                <service.icon className="service-icon w-7 h-7 text-primary transition-all duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover arrow indicator */}
              <div className="service-arrow absolute bottom-8 right-8 opacity-0 transform translate-x-10">
                <span className="text-primary text-2xl">→</span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
