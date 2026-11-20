'use client';

import { Download, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const firstName = 'PANCHADSARAM';
  const lastName = 'KUKARAKSHAN';

  const rotAngles = [-1, 1, -0.5, 0.8, -1, 1, -0.6, 0.7, -1, 1, -0.5, 0.8];
  const rotAnglesLast = [-1.2, 0.8, -0.5, 1, -1, 0.6, -0.8, 1.2, -0.6, 1, -1];

  return (
    <section id="hero-section" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-8 pb-10 overflow-hidden z-10">
      {/* Edge-To-Edge "PORTFOLIO" in Anton (z-0 behind person) */}
      <div className="w-full relative z-0 select-none pointer-events-none pt-4">
        <svg viewBox="0 0 1000 160" className="hero-title-svg" preserveAspectRatio="none">
          <text
            x="500"
            y="145"
            textAnchor="middle"
            fontFamily="var(--font-anton), sans-serif"
            fontSize="165"
            fill="#ffffff"
            letterSpacing="4"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
          >
            PORTFOLIO
          </text>
        </svg>
      </div>

      {/* Hero Content: 3-Column Layered Grid */}
      <div className="relative w-full -mt-20 sm:-mt-28 md:-mt-36 z-10 grid grid-cols-1 md:grid-cols-12 items-end min-h-[480px] sm:min-h-[540px] md:min-h-[600px]">
        {/* Monochrome Celestial Disc Backdrop */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-mono-900 via-mono-800 to-mono-700 -z-10 shadow-[0_0_90px_rgba(255,255,255,0.12)] border border-mono-700/60 pointer-events-none"></div>

        {/* LEFT COLUMN */}
        <div className="md:col-span-4 flex flex-col justify-end pb-4 space-y-5 order-2 md:order-1 text-left">
          <div>
            <span className="text-xs font-display text-mono-200 uppercase tracking-widest block mb-1 font-semibold">CORE IDENTITY</span>
            <h2 className="font-anton text-3xl sm:text-4xl lg:text-[2.6rem] tracking-wide text-white uppercase leading-[1.08]">
              FULL STACK DEVELOPER<br />
              <span className="text-mono-200">WITH AI KNOWLEDGE</span>
            </h2>
            <div className="text-xs font-body text-mono-200 uppercase tracking-wider mt-3 space-y-1 font-medium">
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> AGENTIC WORKFLOWS & PROMPTING</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> SPRING BOOT & NEXT.JS SYSTEMS</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> INTERACTIVE THREE.JS 3D WEB</p>
            </div>
          </div>

          <div className="border-l-2 border-white pl-4 py-1.5 bg-mono-900/40">
            <p className="font-body italic text-xs sm:text-sm text-mono-100 leading-relaxed">
              &quot;I build digital products that are fast, clean, and useful.&quot;
            </p>
            <div className="font-signature text-3xl sm:text-4xl text-white mt-1">
              Kukarakshan P.
            </div>
          </div>

          <div className="pt-1 flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black text-xs font-display font-bold tracking-widest uppercase hover:bg-neutral-200 transition rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CENTER COLUMN: Hero Cutout */}
        <div className="md:col-span-4 relative flex flex-col items-center justify-end order-1 md:order-2 h-[420px] sm:h-[480px] md:h-[530px] pointer-events-none">
          <div className="relative w-full h-full flex items-end justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero.png"
              alt="Panchadsaram Kukarakshan"
              className="hero-drop-shadow max-h-full w-auto object-contain object-bottom pointer-events-auto transform hover:scale-105 transition-transform duration-500 scale-110 sm:scale-120 md:scale-130 origin-bottom translate-y-0"
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-mono-950 via-mono-950/80 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-4 flex flex-col justify-end pb-4 space-y-4 order-3 text-left min-w-0">
          <div className="min-w-0">
            <div className="font-syne font-extrabold uppercase tracking-tight select-none">
              <div className="text-sm sm:text-base text-mono-300 font-bold tracking-wider leading-none">
                {firstName.split('').map((letter, i) => (
                  <span
                    key={i}
                    className="bump-letter"
                    style={{ ['--r' as any]: rotAngles[i % rotAngles.length] }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <div className="text-2xl sm:text-[1.75rem] lg:text-[2rem] text-white font-extrabold mt-1 tracking-tight whitespace-nowrap leading-tight">
                {lastName.split('').map((letter, i) => (
                  <span
                    key={i}
                    className="bump-letter"
                    style={{ ['--r' as any]: rotAnglesLast[i % rotAnglesLast.length] }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>

            <p className="font-display text-xs text-mono-200 font-bold tracking-wider mt-2.5 uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              SOFTWARE ENGINEER | FULL STACK & AI
            </p>

            <div className="mt-3 p-3 bg-mono-900/60 border-l-2 border-white rounded-r-sm">
              <span className="text-[10px] font-display text-mono-400 uppercase tracking-widest block font-bold">PROFESSIONAL SUMMARY</span>
              <p className="text-xs text-mono-200 mt-1 leading-relaxed font-body">
                Software Engineering undergraduate and full-stack developer who builds web and mobile applications with Next.js, React, Spring Boot, and Flutter. Delivers client platforms with clean UI design and interactive 3D experiences (Three.js), backed by reliable REST APIs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 border-t border-b border-mono-800 py-2.5 font-display text-center bg-mono-900/50">
            <div>
              <div className="font-anton text-2xl text-white">10+</div>
              <div className="text-[10px] text-mono-300 tracking-wider">PROJECTS</div>
            </div>
            <div className="border-l border-r border-mono-800">
              <div className="font-anton text-2xl text-white">3.7+</div>
              <div className="text-[10px] text-mono-300 tracking-wider">ACADEMIC GPA</div>
            </div>
            <div>
              <div className="font-anton text-2xl text-white">02</div>
              <div className="text-[10px] text-mono-300 tracking-wider">ACTIVE ROLES</div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1 font-display text-xs">
            <a
              href="/public/Kukarakshan_CV.pdf"
              download="Kukarakshan_CV.pdf"
              className="flex-1 py-3 px-3 border border-mono-700 hover:border-white text-center text-white hover:bg-white hover:text-black transition flex items-center justify-center gap-2 font-bold rounded-sm"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV</span>
            </a>
            <a
              href="https://wa.me/94756027337?text=Hi%20Kukarakshan,%20let's%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-3 bg-mono-900 border border-mono-700 text-center text-white hover:border-white transition flex items-center justify-center gap-2 font-bold rounded-sm"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
