import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Backend" },
  { name: "Make", category: "Automation" },
  { name: "n8n", category: "Automation" },
  { name: "OpenAI", category: "AI" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind", category: "Styling" },
];

const TechStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.fromTo(
        ".tech-header",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".tech-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax scrolling for tech rows
      gsap.to(row1Ref.current, {
        x: -150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(row2Ref.current, {
        x: 150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Individual badge animations
      gsap.utils.toArray<HTMLElement>(".tech-badge").forEach((badge, index) => {
        gsap.fromTo(
          badge,
          { opacity: 0, scale: 0.5, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: badge,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Hover effect
        badge.addEventListener("mouseenter", () => {
          gsap.to(badge, {
            scale: 1.1,
            y: -5,
            boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(badge.querySelector(".tech-dot"), {
            scale: 2,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        badge.addEventListener("mouseleave", () => {
          gsap.to(badge, {
            scale: 1,
            y: 0,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(badge.querySelector(".tech-dot"), {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Continuous dot pulse
      gsap.to(".tech-dot", {
        scale: 1.5,
        opacity: 0.5,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="tech" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="tech-header text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powered by{" "}
            <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We use industry-leading technologies to build robust, scalable, and future-proof solutions.
          </p>
        </div>

        {/* Tech badges - animated marquee effect */}
        <div className="relative">
          {/* Gradient fades on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* First row */}
          <div className="flex gap-4 mb-4 overflow-hidden">
            <div ref={row1Ref} className="tech-row flex gap-4">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="tech-badge flex-shrink-0 glass-card px-6 py-4 flex items-center gap-3 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="tech-dot w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  <span className="font-medium whitespace-nowrap">{tech.name}</span>
                  <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-glass">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - reverse direction */}
          <div className="flex gap-4 overflow-hidden">
            <div ref={row2Ref} className="tech-row flex gap-4">
              {[...technologies.slice(5), ...technologies.slice(0, 5), ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="tech-badge flex-shrink-0 glass-card px-6 py-4 flex items-center gap-3 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="tech-dot w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary" />
                  <span className="font-medium whitespace-nowrap">{tech.name}</span>
                  <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-glass">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
