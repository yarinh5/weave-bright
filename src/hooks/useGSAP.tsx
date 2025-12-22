import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAPScrollTrigger = (
  selector: string,
  animation: gsap.TweenVars,
  triggerOptions?: ScrollTrigger.Vars
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50, ...animation },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            ...triggerOptions,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, animation, triggerOptions]);

  return ref;
};

export const initGSAPAnimations = () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Hero section animations
  gsap.fromTo(
    ".hero-badge",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
  );

  gsap.fromTo(
    ".hero-title",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.2, delay: 0.4, ease: "power3.out" }
  );

  gsap.fromTo(
    ".hero-subtitle",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
  );

  gsap.fromTo(
    ".hero-buttons",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
  );

  gsap.fromTo(
    ".hero-stats",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power3.out" }
  );

  // Section headers animation
  gsap.utils.toArray<HTMLElement>(".section-header").forEach((header) => {
    gsap.fromTo(
      header,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Service cards stagger animation
  gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 80, rotationX: 15 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Process steps animation
  gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, index) => {
    gsap.fromTo(
      step,
      { opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Why us features animation
  gsap.utils.toArray<HTMLElement>(".why-us-feature").forEach((feature, index) => {
    gsap.fromTo(
      feature,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: feature,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Tech badges parallax
  gsap.utils.toArray<HTMLElement>(".tech-row").forEach((row, index) => {
    gsap.to(row, {
      x: index % 2 === 0 ? -100 : 100,
      ease: "none",
      scrollTrigger: {
        trigger: row,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  // CTA section animation
  gsap.fromTo(
    ".cta-card",
    { opacity: 0, scale: 0.9, y: 50 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-card",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Floating elements continuous animation
  gsap.to(".floating-orb", {
    y: 20,
    duration: 3,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
  });

  // Gradient text shimmer effect
  gsap.to(".gradient-text-animate", {
    backgroundPosition: "200% center",
    duration: 3,
    ease: "none",
    repeat: -1,
  });
};

export const animateOnScroll = (element: HTMLElement, animation: gsap.TweenVars) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      ...animation,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export default gsap;
