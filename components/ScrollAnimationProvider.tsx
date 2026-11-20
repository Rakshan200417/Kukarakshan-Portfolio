'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VanillaTilt from 'vanilla-tilt';

export default function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial page load animations for Hero columns
    const ctx = gsap.context(() => {
      // Hero elements entrance
      gsap.from('.gs-reveal-hero-title', {
        duration: 1.2,
        y: -40,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.1,
      });

      gsap.from('.gs-reveal-left', {
        duration: 1.2,
        x: -60,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.25,
      });

      gsap.from('.gs-reveal-center', {
        duration: 1.3,
        y: 40,
        scale: 0.95,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.15,
      });

      gsap.from('.gs-reveal-right', {
        duration: 1.2,
        x: 60,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.35,
      });

      // Distinct entrance animations for each section as visitor scrolls:
      // 1. WHAT I DO: Slide-up with subtle stagger
      gsap.from('#services', {
        scrollTrigger: {
          trigger: '#services',
          start: 'top 85%',
        },
        duration: 1.1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
      });

      gsap.from('#services .tilt-card', {
        scrollTrigger: {
          trigger: '#services',
          start: 'top 80%',
        },
        duration: 0.9,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // 2. PROCESS & FEATURED WORK: Staggered from opposing sides
      gsap.from('#process', {
        scrollTrigger: {
          trigger: '#process',
          start: 'top 85%',
        },
        duration: 1.1,
        x: -50,
        opacity: 0,
        ease: 'power3.out',
      });

      gsap.from('#projects', {
        scrollTrigger: {
          trigger: '#projects',
          start: 'top 85%',
        },
        duration: 1.1,
        x: 50,
        opacity: 0,
        ease: 'power3.out',
      });

      // 3. ABOUT ME, TOOLS & TESTIMONIAL: Pop-in scale and staggered lift
      gsap.from('#skills #about', {
        scrollTrigger: {
          trigger: '#skills',
          start: 'top 85%',
        },
        duration: 1.0,
        y: 40,
        opacity: 0,
        ease: 'power3.out',
      });

      gsap.from('#skills section:nth-child(2)', {
        scrollTrigger: {
          trigger: '#skills',
          start: 'top 85%',
        },
        duration: 1.1,
        scale: 0.96,
        opacity: 0,
        delay: 0.1,
        ease: 'power3.out',
      });

      gsap.from('#skills section:nth-child(3)', {
        scrollTrigger: {
          trigger: '#skills',
          start: 'top 85%',
        },
        duration: 1.0,
        x: 40,
        opacity: 0,
        delay: 0.2,
        ease: 'power3.out',
      });

      // 4. WORK EXPERIENCE & EDUCATION: Split reveal
      gsap.from('#experience section:nth-child(1)', {
        scrollTrigger: {
          trigger: '#experience',
          start: 'top 85%',
        },
        duration: 1.1,
        x: -40,
        opacity: 0,
        ease: 'power3.out',
      });

      gsap.from('#experience section:nth-child(2)', {
        scrollTrigger: {
          trigger: '#experience',
          start: 'top 85%',
        },
        duration: 1.1,
        x: 40,
        opacity: 0,
        delay: 0.15,
        ease: 'power3.out',
      });

      // 5. CERTIFICATES: Card zoom-up stagger
      gsap.from('#certificates', {
        scrollTrigger: {
          trigger: '#certificates',
          start: 'top 85%',
        },
        duration: 1.1,
        y: 45,
        opacity: 0,
        ease: 'power3.out',
      });

      gsap.from('#certificates .group', {
        scrollTrigger: {
          trigger: '#certificates',
          start: 'top 80%',
        },
        duration: 0.9,
        y: 35,
        opacity: 0,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // 6. 3D LAB: Spherical expansion fade
      gsap.from('#interactive-3d', {
        scrollTrigger: {
          trigger: '#interactive-3d',
          start: 'top 85%',
        },
        duration: 1.2,
        scale: 0.96,
        opacity: 0,
        ease: 'power3.out',
      });

      // 7. CONTACT & LET'S COLLABORATE: Bottom slide-up
      gsap.from('#contact', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 85%',
        },
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
      });

      // Initialize 3D VanillaTilt on all cards
      const tiltCards = document.querySelectorAll('.tilt-card');
      if (tiltCards.length > 0) {
        VanillaTilt.init(Array.from(tiltCards) as HTMLElement[], {
          max: 8,
          speed: 400,
          glare: true,
          'max-glare': 0.12,
          scale: 1.02,
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return <>{children}</>;
}
