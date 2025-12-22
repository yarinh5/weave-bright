import { useEffect, useRef } from "react";
import { Zap, Fingerprint, Scale, Cog, Building2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Launch faster with our agile development process and proven workflows.",
  },
  {
    icon: Fingerprint,
    title: "Fully Custom",
    description: "No templates. Every system is built from scratch for your unique needs.",
  },
  {
    icon: Scale,
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling increased load seamlessly.",
  },
  {
    icon: Cog,
    title: "Automation-First",
    description: "We eliminate manual tasks by automating everything that can be automated.",
  },
  {
    icon: Building2,
    title: "Built for Business",
    description: "Enterprise-grade solutions designed for real-world business challenges.",
  },
];

const WhyUsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        ".why-us-content",
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-us-content",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats counter animation
      gsap.utils.toArray<HTMLElement>(".why-us-stat").forEach((stat, index) => {
        gsap.fromTo(
          stat,
          { opacity: 0, y: 30, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Feature cards stagger animation
      gsap.utils.toArray<HTMLElement>(".why-us-feature").forEach((feature, index) => {
        gsap.fromTo(
          feature,
          { opacity: 0, x: 80, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: feature,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Hover animations
        feature.addEventListener("mouseenter", () => {
          gsap.to(feature, {
            x: 10,
            backgroundColor: "rgba(139, 92, 246, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(feature.querySelector(".feature-icon"), {
            scale: 1.2,
            rotate: 15,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        feature.addEventListener("mouseleave", () => {
          gsap.to(feature, {
            x: 0,
            backgroundColor: "rgba(139, 92, 246, 0.03)",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(feature.querySelector(".feature-icon"), {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Continuous icon animation
      gsap.to(".feature-icon-container", {
        y: -3,
        duration: 1.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="why-us" className="relative py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="why-us-content">
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We Don't Just Build.{" "}
              <span className="gradient-text">We Automate.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our automation-first approach means your systems work smarter, not harder. We combine cutting-edge technology with strategic thinking to deliver solutions that truly transform businesses.
            </p>

            {/* Stats row */}
            <div ref={statsRef} className="flex gap-8">
              <div className="why-us-stat">
                <div className="text-4xl font-bold gradient-text">3x</div>
                <div className="text-sm text-muted-foreground">Faster Development</div>
              </div>
              <div className="why-us-stat">
                <div className="text-4xl font-bold gradient-text">80%</div>
                <div className="text-sm text-muted-foreground">Less Manual Work</div>
              </div>
              <div className="why-us-stat">
                <div className="text-4xl font-bold gradient-text">∞</div>
                <div className="text-sm text-muted-foreground">Scale Potential</div>
              </div>
            </div>
          </div>

          {/* Right features grid */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="why-us-feature group flex gap-4 p-5 rounded-xl bg-glass/30 border border-transparent hover:border-glass-border transition-all duration-300 cursor-pointer"
              >
                <div className="feature-icon-container flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <feature.icon className="feature-icon w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
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

export default WhyUsSection;
