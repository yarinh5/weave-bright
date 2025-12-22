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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.fromTo(
        ".services-header",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger animation with 3D effect
      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotateX: 45,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Hover animation setup
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".service-icon"), {
            scale: 1.2,
            rotate: 10,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(card.querySelector(".service-icon"), {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Floating icons animation
      gsap.to(".service-icon-container", {
        y: 5,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-24 md:py-32">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="services-header text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            What We Build
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            End-to-End{" "}
            <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From automated websites to AI-powered systems, we build everything your business needs to thrive in the digital age.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative glass-card p-8 glow-effect transition-all duration-500 hover:border-primary/30 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Icon container */}
              <div className="service-icon-container w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <service.icon className="service-icon w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover arrow indicator */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <span className="text-primary text-2xl">→</span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
