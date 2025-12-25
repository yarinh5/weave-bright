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
      // Badge animation
      gsap.fromTo(
        ".tech-badge-header",
        { opacity: 0, y: 30, scale: 0.8, rotateZ: -5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateZ: 0,
          duration: 0.8,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ".tech-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Title with skew reveal
      gsap.fromTo(
        ".tech-title",
        { opacity: 0, y: 80, skewY: 5 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".tech-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtitle
      gsap.fromTo(
        ".tech-subtitle",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".tech-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax scrolling with rotation for tech rows
      gsap.to(row1Ref.current, {
        x: -200,
        rotateZ: -1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(row2Ref.current, {
        x: 200,
        rotateZ: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Individual badge entrance animations
      gsap.utils.toArray<HTMLElement>(".tech-badge").forEach((badge, index) => {
        gsap.fromTo(
          badge,
          { 
            opacity: 0, 
            scale: 0.3, 
            y: 50,
            rotateZ: index % 2 === 0 ? -15 : 15,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateZ: 0,
            duration: 0.6,
            delay: index * 0.04,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: badge,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Advanced hover effect with glow
        badge.addEventListener("mouseenter", () => {
          gsap.to(badge, {
            scale: 1.15,
            y: -10,
            rotateZ: 3,
            boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(badge.querySelector(".tech-dot"), {
            scale: 2.5,
            boxShadow: "0 0 20px hsl(262 83% 58%)",
            duration: 0.4,
            ease: "back.out(2)",
          });
          gsap.to(badge.querySelector(".tech-category"), {
            backgroundColor: "hsl(262 83% 58% / 0.3)",
            color: "hsl(210 40% 98%)",
            duration: 0.3,
          });
        });

        badge.addEventListener("mouseleave", () => {
          gsap.to(badge, {
            scale: 1,
            y: 0,
            rotateZ: 0,
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(badge.querySelector(".tech-dot"), {
            scale: 1,
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(badge.querySelector(".tech-category"), {
            backgroundColor: "hsl(222 47% 12% / 0.5)",
            color: "hsl(215 20% 65%)",
            duration: 0.3,
          });
        });
      });

      // Continuous dot pulse with color shift
      gsap.to(".tech-dot", {
        scale: 1.8,
        opacity: 0.6,
        duration: 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.08,
          from: "random",
        },
      });

      // Background glow animation
      gsap.to(".tech-glow", {
        opacity: 0.7,
        scale: 1.3,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Floating particles
      gsap.utils.toArray<HTMLElement>(".tech-particle").forEach((particle, i) => {
        gsap.to(particle, {
          y: "random(-50, 50)",
          x: "random(-40, 40)",
          rotation: "random(-90, 90)",
          duration: "random(5, 9)",
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.3,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="tech" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="tech-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="tech-particle absolute top-1/4 left-1/5 w-2 h-2 bg-primary/30 rounded-full" />
        <div className="tech-particle absolute top-1/3 right-1/4 w-3 h-3 bg-accent/20 rounded-full" />
        <div className="tech-particle absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/20 rounded-full" />
        <div className="tech-particle absolute top-2/3 right-1/3 w-4 h-4 bg-accent/15 rounded-full" />
      </div>

      <div className="container px-4 md:px-6 relative">
        {/* Section header */}
        <div className="tech-header text-center max-w-3xl mx-auto mb-16">
          <span className="tech-badge-header inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
            Technology Stack
          </span>
          <h2 className="tech-title text-3xl md:text-5xl font-bold mb-6">
            Powered by{" "}
            <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="tech-subtitle text-muted-foreground text-lg">
            We use industry-leading technologies to build robust, scalable, and future-proof solutions.
          </p>
        </div>

        {/* Tech badges - animated marquee effect */}
        <div className="relative">
          {/* Gradient fades on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* First row */}
          <div className="flex gap-4 mb-4 overflow-hidden py-2">
            <div ref={row1Ref} className="tech-row flex gap-4">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="tech-badge flex-shrink-0 glass-card px-6 py-4 flex items-center gap-3 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
                >
                  <div className="tech-dot w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300" />
                  <span className="font-medium whitespace-nowrap">{tech.name}</span>
                  <span className="tech-category text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-glass transition-all duration-300">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - reverse direction */}
          <div className="flex gap-4 overflow-hidden py-2">
            <div ref={row2Ref} className="tech-row flex gap-4">
              {[...technologies.slice(5), ...technologies.slice(0, 5), ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="tech-badge flex-shrink-0 glass-card px-6 py-4 flex items-center gap-3 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
                >
                  <div className="tech-dot w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary transition-all duration-300" />
                  <span className="font-medium whitespace-nowrap">{tech.name}</span>
                  <span className="tech-category text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-glass transition-all duration-300">
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
