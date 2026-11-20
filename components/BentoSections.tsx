'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Layout,
  Smartphone,
  Box,
  Server,
  Bot,
  Compass,
  FileCode,
  Palette,
  Code,
  CheckCircle,
  ArrowRight,
  GitBranch,
  ExternalLink,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
} from 'lucide-react';

interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

export default function BentoSections() {
  const [repos, setRepos] = useState<GitHubRepo[]>([
    { name: 'BloodLink-AI', description: 'AI blood donor matching', language: 'Flutter', html_url: 'https://github.com/Rakshan200417' },
    { name: 'Farmly-AI', description: 'Agri market pricing engine', language: 'Python', html_url: 'https://github.com/Rakshan200417' },
    { name: 'Modern-POS', description: 'Barcode POS & invoicing', language: 'React', html_url: 'https://github.com/Rakshan200417' },
    { name: 'Lab-Reserve', description: 'Equipment slot booking', language: 'Spring', html_url: 'https://github.com/Rakshan200417' },
  ]);
  const [syncStatus, setSyncStatus] = useState('SYNCED');

  useEffect(() => {
    fetch('https://api.github.com/users/Rakshan200417/repos?sort=updated&per_page=4')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setSyncStatus('SYNCED LIVE');
      })
      .catch(() => {
        setSyncStatus('CACHED');
      });
  }, []);

  return (
    <>
      {/* ================= WHAT I DO ================= */}
      <section id="services" className="border border-mono-800 bg-mono-900/80 backdrop-blur p-6 sm:p-8 rounded-sm">
        <div className="mb-6 flex items-center justify-between border-b border-mono-800 pb-3">
          <div>
            <h3 className="font-anton text-2xl tracking-wider text-white uppercase leading-none">WHAT I DO</h3>
            <div className="w-10 h-0.5 bg-white mt-2"></div>
          </div>
          <span className="text-xs font-display text-mono-400 uppercase tracking-widest">CAPABILITIES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="tilt-card bg-mono-850 p-5 border border-mono-800 hover:border-white transition-all duration-300 group hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] rounded-sm">
            <div className="text-white mb-3 group-hover:scale-110 transition-transform">
              <Layout className="w-6 h-6" />
            </div>
            <h4 className="font-syne font-bold text-sm tracking-wider text-white uppercase mb-1.5">FULL STACK WEB</h4>
            <p className="text-xs text-mono-300 leading-relaxed font-body">
              Modern React, Vite, and Next.js applications engineered for speed, clean UX, and responsiveness.
            </p>
          </div>

          <div className="tilt-card bg-mono-850 p-5 border border-mono-800 hover:border-white transition-all duration-300 group hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] rounded-sm">
            <div className="text-white mb-3 group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6" />
            </div>
            <h4 className="font-syne font-bold text-sm tracking-wider text-white uppercase mb-1.5">MOBILE APPS</h4>
            <p className="text-xs text-mono-300 leading-relaxed font-body">
              Cross-platform iOS and Android mobile solutions built with Flutter and reactive architecture.
            </p>
          </div>

          <div className="tilt-card bg-mono-850 p-5 border border-mono-800 hover:border-white transition-all duration-300 group hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] rounded-sm">
            <div className="text-white mb-3 group-hover:scale-110 transition-transform">
              <Box className="w-6 h-6" />
            </div>
            <h4 className="font-syne font-bold text-sm tracking-wider text-white uppercase mb-1.5">3D EXPERIENCES</h4>
            <p className="text-xs text-mono-300 leading-relaxed font-body">
              Interactive Three.js 3D web environments, camera controls, shader effects, and model visualizers.
            </p>
          </div>

          <div className="tilt-card bg-mono-850 p-5 border border-mono-800 hover:border-white transition-all duration-300 group hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] rounded-sm">
            <div className="text-white mb-3 group-hover:scale-110 transition-transform">
              <Server className="w-6 h-6" />
            </div>
            <h4 className="font-syne font-bold text-sm tracking-wider text-white uppercase mb-1.5">REST APIS</h4>
            <p className="text-xs text-mono-300 leading-relaxed font-body">
              Scalable Java Spring Boot and C# .NET backends with JWT authentication and relational databases.
            </p>
          </div>

          <div className="tilt-card bg-mono-850 p-5 border border-mono-800 hover:border-white transition-all duration-300 group hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] rounded-sm">
            <div className="text-white mb-3 group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <h4 className="font-syne font-bold text-sm tracking-wider text-white uppercase mb-1.5">AI AUTOMATION</h4>
            <p className="text-xs text-mono-300 leading-relaxed font-body">
              AI blood donor matching, agricultural pricing systems, and intelligent study assistant models.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROCESS & FEATURED WORK ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: Process */}
        <section id="process" className="lg:col-span-4 border border-mono-800 bg-mono-900/80 backdrop-blur p-6 sm:p-8 rounded-sm flex flex-col justify-between space-y-6">
          <div>
            <div className="mb-6 border-b border-mono-800 pb-3 flex items-center justify-between">
              <div>
                <h3 className="font-anton text-2xl tracking-wider text-white uppercase leading-none">MY PROCESS</h3>
                <div className="w-10 h-0.5 bg-white mt-2"></div>
              </div>
              <span className="text-[10px] font-display text-mono-400 uppercase tracking-widest font-bold">5 STAGES</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 group p-2 rounded-sm hover:bg-mono-850/60 transition-colors">
                <span className="font-syne font-bold text-sm text-white group-hover:translate-x-1 transition-transform">01</span>
                <div className="w-8 h-8 rounded-full border border-mono-700 flex items-center justify-center flex-shrink-0 text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition shadow-sm">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-syne font-bold text-xs text-white uppercase tracking-wide">DISCOVER & UNDERSTAND</h5>
                  <p className="text-[11px] text-mono-300 leading-relaxed font-body mt-0.5">
                    Understanding objectives, user flows, and technical requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 group p-2 rounded-sm hover:bg-mono-850/60 transition-colors">
                <span className="font-syne font-bold text-sm text-white group-hover:translate-x-1 transition-transform">02</span>
                <div className="w-8 h-8 rounded-full border border-mono-700 flex items-center justify-center flex-shrink-0 text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition shadow-sm">
                  <FileCode className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-syne font-bold text-xs text-white uppercase tracking-wide">DEFINE & ARCHITECT</h5>
                  <p className="text-[11px] text-mono-300 leading-relaxed font-body mt-0.5">
                    Schema design, wireframing, and REST endpoint definitions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 group p-2 rounded-sm hover:bg-mono-850/60 transition-colors">
                <span className="font-syne font-bold text-sm text-white group-hover:translate-x-1 transition-transform">03</span>
                <div className="w-8 h-8 rounded-full border border-mono-700 flex items-center justify-center flex-shrink-0 text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition shadow-sm">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-syne font-bold text-xs text-white uppercase tracking-wide">DESIGN & 3D VISUALS</h5>
                  <p className="text-[11px] text-mono-300 leading-relaxed font-body mt-0.5">
                    Crafting clean interfaces and Three.js 3D visual interaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 group p-2 rounded-sm hover:bg-mono-850/60 transition-colors">
                <span className="font-syne font-bold text-sm text-white group-hover:translate-x-1 transition-transform">04</span>
                <div className="w-8 h-8 rounded-full border border-mono-700 flex items-center justify-center flex-shrink-0 text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition shadow-sm">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-syne font-bold text-xs text-white uppercase tracking-wide">BUILD & DEVELOP</h5>
                  <p className="text-[11px] text-mono-300 leading-relaxed font-body mt-0.5">
                    Writing clean, reliable code with Next.js, Spring Boot, and Flutter.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 group p-2 rounded-sm hover:bg-mono-850/60 transition-colors">
                <span className="font-syne font-bold text-sm text-white group-hover:translate-x-1 transition-transform">05</span>
                <div className="w-8 h-8 rounded-full border border-mono-700 flex items-center justify-center flex-shrink-0 text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition shadow-sm">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-syne font-bold text-xs text-white uppercase tracking-wide">DELIVER & DEPLOY</h5>
                  <p className="text-[11px] text-mono-300 leading-relaxed font-body mt-0.5">
                    Rigorous testing, performance audit, and cloud deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-mono-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-display text-mono-400 uppercase tracking-widest font-bold">CORE COMMITMENTS</span>
              <span className="text-[10px] font-display text-white">100% PRODUCTION READY</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-display">
              <div className="p-2.5 bg-mono-850 border border-mono-800 rounded-sm hover:border-white transition-all">
                <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
                  <Zap className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Fast Performance</span>
                </div>
                <p className="text-[10px] text-mono-400 font-body mt-1 leading-snug">Sub-second page loads & optimized assets</p>
              </div>

              <div className="p-2.5 bg-mono-850 border border-mono-800 rounded-sm hover:border-white transition-all">
                <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Type &amp; Schema Safe</span>
                </div>
                <p className="text-[10px] text-mono-400 font-body mt-1 leading-snug">Clean architecture & robust REST APIs</p>
              </div>

              <div className="p-2.5 bg-mono-850 border border-mono-800 rounded-sm hover:border-white transition-all">
                <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>AI-Assisted Velocity</span>
                </div>
                <p className="text-[10px] text-mono-400 font-body mt-1 leading-snug">High delivery speed with Claude & Copilot</p>
              </div>

              <div className="p-2.5 bg-mono-850 border border-mono-800 rounded-sm hover:border-white transition-all">
                <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
                  <Layers className="w-3.5 h-3.5 text-white" />
                  <span>Spatial 3D UX</span>
                </div>
                <p className="text-[10px] text-mono-400 font-body mt-1 leading-snug">Three.js interactive product views</p>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT: Featured Work */}
        <section id="projects" className="lg:col-span-8 border border-mono-800 bg-mono-900/80 backdrop-blur p-6 sm:p-8 rounded-sm">
          <div className="mb-6 flex items-center justify-between border-b border-mono-800 pb-3">
            <div>
              <h3 className="font-anton text-2xl tracking-wider text-white uppercase leading-none">FEATURED WORK</h3>
              <div className="w-10 h-0.5 bg-white mt-2"></div>
            </div>
            <a
              href="https://github.com/Rakshan200417"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs text-mono-300 hover:text-white flex items-center gap-1.5 transition"
            >
              <span>View all on GitHub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <a
              href="https://github.com/Rakshan200417/DD-Photography-95"
              target="_blank"
              rel="noopener noreferrer"
              className="tilt-card bg-mono-850 border border-mono-800 hover:border-white transition duration-300 group overflow-hidden block rounded-sm"
            >
              <div className="aspect-video w-full bg-black overflow-hidden relative">
                <Image
                  src="/images/proj-dd-photography.png"
                  alt="DD Photography 95"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-display text-white border border-mono-700">
                  GITHUB REPO ↗
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-syne font-bold text-base tracking-wide text-white uppercase group-hover:text-mono-200 transition">DD PHOTOGRAPHY 95</h4>
                <p className="text-[11px] font-display text-mono-400 tracking-wide uppercase mt-0.5">REACT / SPRING BOOT / THREE.JS</p>
                <p className="text-xs text-mono-400 mt-2 leading-relaxed font-body">
                  Interactive 3D studio experience, live booking portal, and Google auth.
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Rakshan200417/Ceylon-Panorama"
              target="_blank"
              rel="noopener noreferrer"
              className="tilt-card bg-mono-850 border border-mono-800 hover:border-white transition duration-300 group overflow-hidden block rounded-sm"
            >
              <div className="aspect-video w-full bg-black overflow-hidden relative">
                <Image
                  src="/images/proj-ceylon-panorama.png"
                  alt="Ceylon Panorama"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-display text-white border border-mono-700">
                  GITHUB REPO ↗
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-syne font-bold text-base tracking-wide text-white uppercase group-hover:text-mono-200 transition">CEYLON PANORAMA</h4>
                <p className="text-[11px] font-display text-mono-400 tracking-wide uppercase mt-0.5">HTML5 / CSS3 / JAVASCRIPT / PHP</p>
                <p className="text-xs text-mono-400 mt-2 leading-relaxed font-body">
                  Interactive Sri Lanka travel &amp; tourism booking platform for destinations.
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Rakshan200417/Find-MyMeds"
              target="_blank"
              rel="noopener noreferrer"
              className="tilt-card bg-mono-850 border border-mono-800 hover:border-white transition duration-300 group overflow-hidden block rounded-sm"
            >
              <div className="aspect-video w-full bg-black overflow-hidden relative">
                <Image
                  src="/images/proj-findmymeds.png"
                  alt="Find MyMeds"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-display text-white border border-mono-700">
                  GITHUB REPO ↗
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-syne font-bold text-base tracking-wide text-white uppercase group-hover:text-mono-200 transition">FIND MYMEDS</h4>
                <p className="text-[11px] font-display text-mono-400 tracking-wide uppercase mt-0.5">REACT + VITE / SPRING BOOT / MYSQL</p>
                <p className="text-xs text-mono-400 mt-2 leading-relaxed font-body">
                  Smart medicine &amp; pharmacy locator platform with real-time stock availability.
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Rakshan200417/Trio-Treats"
              target="_blank"
              rel="noopener noreferrer"
              className="tilt-card bg-mono-850 border border-mono-800 hover:border-white transition duration-300 group overflow-hidden block rounded-sm"
            >
              <div className="aspect-video w-full bg-black overflow-hidden relative">
                <Image
                  src="/images/proj-trio-treats.jpg"
                  alt="Trio Treats"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-display text-white border border-mono-700">
                  GITHUB REPO ↗
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-syne font-bold text-base tracking-wide text-white uppercase group-hover:text-mono-200 transition">TRIO TREATS</h4>
                <p className="text-[11px] font-display text-mono-400 tracking-wide uppercase mt-0.5">NEXT.JS / THREE.JS 3D / EMAIL API</p>
                <p className="text-xs text-mono-400 mt-2 leading-relaxed font-body">
                  Cake ordering portal with animated 3D cake hero and instant order dispatch.
                </p>
              </div>
            </a>
          </div>

          <div className="mt-6 pt-5 border-t border-mono-800">
            <div className="flex items-center justify-between mb-3 font-display">
              <div className="flex items-center gap-2 text-xs text-mono-300">
                <GitBranch className="w-4 h-4 text-white" />
                <span className="uppercase">LIVE GITHUB ACTIVITY (Rakshan200417)</span>
              </div>
              <span className="text-[10px] text-mono-400">{syncStatus}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {repos.slice(0, 4).map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.html_url || 'https://github.com/Rakshan200417'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-mono-850 border border-mono-800 hover:border-white transition block group rounded-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-syne font-bold text-xs text-white group-hover:text-mono-200 transition truncate">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-mono-400 flex-shrink-0" />
                  </div>
                  <p className="text-[11px] text-mono-400 font-body truncate mt-1">
                    {repo.description || 'Code repository'}
                  </p>
                  <span className="text-[10px] font-display text-white block mt-1.5">
                    {repo.language || 'Code'}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= ABOUT & SKILLS ================= */}
      <div id="skills" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <section id="about" className="lg:col-span-4 border border-mono-800 bg-mono-900/80 backdrop-blur p-6 sm:p-8 flex flex-col justify-between rounded-sm">
          <div>
            <div className="mb-5 border-b border-mono-800 pb-3">
              <h3 className="font-anton text-2xl tracking-wider text-white uppercase leading-none">ABOUT ME</h3>
              <div className="w-10 h-0.5 bg-white mt-2"></div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-24 h-28 flex-shrink-0 border border-mono-700 overflow-hidden bg-mono-850 shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-sm relative">
                <Image
                  src="/images/about.png"
                  alt="Kukarakshan Panchadsaram"
                  width={96}
                  height={112}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-syne font-bold text-base tracking-wide text-white uppercase">KUKARAKSHAN P.</h4>
                <p className="text-xs font-display text-mono-300 mt-0.5">NSBM Green University &apos;28</p>
                <p className="text-xs text-mono-400 mt-2 leading-relaxed font-body">
                  Full-stack engineer &amp; Jadetime Media intern building production web and mobile software.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-mono-800 grid grid-cols-2 gap-2 text-xs font-display text-mono-300">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span>Detail oriented</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span>Problem solver</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span>Fast learner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span>Clean architecture</span>
            </div>
          </div>
        </section>

        <section className="lg:col-span-5 border border-mono-800 bg-mono-900/80 backdrop-blur p-6 sm:p-8 flex flex-col justify-between rounded-sm">
          <div>
            <div className="mb-5 border-b border-mono-800 pb-3">
              <h3 className="font-anton text-2xl tracking-wider text-white uppercase leading-none">TOOLS &amp; AI KNOWLEDGE</h3>
              <div className="w-10 h-0.5 bg-white mt-2"></div>
            </div>

            <div className="mb-4">
              <span className="text-[10px] font-display text-mono-400 uppercase tracking-widest block mb-2">AI DEV STACK</span>
              <div className="grid grid-cols-3 gap-2">
                <div className="tilt-card p-2.5 bg-mono-850 border border-mono-800 text-center flex flex-col items-center justify-center hover:border-white transition rounded-sm">
                  <span className="text-sm font-bold text-white">⚡</span>
                  <span className="text-[11px] font-display text-white mt-1">Claude Code</span>
                </div>
                <div className="tilt-card p-2.5 bg-mono-850 border border-mono-800 text-center flex flex-col items-center justify-center hover:border-white transition rounded-sm">
                  <span className="text-sm font-bold text-white">▲</span>
                  <span className="text-[11px] font-display text-white mt-1">Antigravity</span>
                </div>
                <div className="tilt-card p-2.5 bg-mono-850 border border-mono-800 text-center flex flex-col items-center justify-center hover:border-white transition rounded-sm">
                  <span className="text-sm font-bold text-white">🤖</span>
                  <span className="text-[11px] font-display text-white mt-1">GitHub Copilot</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-display text-mono-400 uppercase tracking-widest block mb-2">ENGINEERING TOOLS</span>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                <div className="tilt-card p-2 bg-mono-850 border border-mono-800 text-center flex flex-col items-center justify-center hover:border-white transition rounded-sm">
                  <span className="text-xs font-bold text-white">⚛</span>
                  <span className="text-[10px] font-display text-mono-300 mt-1">React</span>
                </div>
                <div className="tilt-card p-2 bg-mono-850 border border-mono-800 text-center flex flex-col items-center justify-center hover:border-white transition rounded-sm">
                  <span className="text-xs font-bold text-white">▲</span>
                  <span className="text-[10px] font-display text-mono-300 mt-1">Next.js</span>
                </div>
                <div className="tilt-card p-2 bg-mono-850 border border-mono-800 text-center flex flex-col items-center justify-center hover:border-white transition rounded-sm">
                  <span className="text-xs font-bold text-white">☕</span>
                  <span className="text-[10px] font-display text-mono-300 mt-1">Spring</span>
                </div>
                <div className="tilt-card p-2 bg-mono-850 border border-mono-800 text-center flex flex-col items-center justify-center hover:border-white transition rounded-sm">
                  <span className="text-xs font-bold text-white">✦</span>
                  <span className="text-[10px] font-display text-mono-300 mt-1">Flutter</span>
                </div>
                <div className="tilt-card p-2 bg-mono-850 border border-mono-800 text-center flex flex-col items-center justify-center hover:border-white transition rounded-sm">
                  <span className="text-xs font-bold text-white">◬</span>
                  <span className="text-[10px] font-display text-mono-300 mt-1">Three.js</span>
                </div>
                <div className="tilt-card p-2 bg-mono-850 border border-mono-800 text-center flex flex-col items-center justify-center hover:border-white transition rounded-sm">
                  <span className="text-xs font-bold text-white">☵</span>
                  <span className="text-[10px] font-display text-mono-300 mt-1">MySQL</span>
                </div>
                <div className="tilt-card p-2 bg-mono-850 border border-mono-800 text-center flex flex-col items-center justify-center hover:border-white transition rounded-sm">
                  <span className="text-xs font-bold text-white">Ps</span>
                  <span className="text-[10px] font-display text-mono-300 mt-1">Photoshop</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-mono-800 text-xs font-display text-mono-400 flex justify-between">
            <span>AI-Powered Full Stack Development</span>
            <span className="text-white font-semibold">NSBM Green University</span>
          </div>
        </section>

        <section className="lg:col-span-3 border border-mono-800 bg-mono-900/80 backdrop-blur p-6 sm:p-8 flex flex-col justify-between rounded-sm">
          <div>
            <div className="text-white text-3xl font-serif">“</div>
            <p className="font-body italic text-xs sm:text-sm text-mono-200 -mt-2 leading-relaxed">
              Kukarakshan delivered an exceptional ordering platform for our bakery with an interactive 3D cake model. Automated email notifications made running our business seamless.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-mono-800 text-xs font-display text-mono-400 flex justify-between items-center">
            <span>— Client, Trio Treats</span>
            <span className="text-white tracking-widest">★★★★★</span>
          </div>
        </section>
      </div>

      {/* ================= EXPERIENCE & EDUCATION ================= */}
      <div id="experience" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <section className="lg:col-span-6 border border-mono-800 bg-mono-900/80 backdrop-blur p-6 sm:p-8 rounded-sm">
          <div className="mb-6 flex items-center justify-between border-b border-mono-800 pb-3">
            <div>
              <h3 className="font-anton text-2xl tracking-wider text-white uppercase leading-none">WORK EXPERIENCE</h3>
              <div className="w-10 h-0.5 bg-white mt-2"></div>
            </div>
            <span className="text-xs font-display text-mono-400 uppercase tracking-widest">CAREER PATH</span>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-mono-800">
            <div className="relative group">
              <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-mono-950 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
              <div className="flex items-baseline justify-between flex-wrap gap-1">
                <h4 className="font-syne font-bold text-sm text-white uppercase tracking-wide">Web Developer Intern</h4>
                <span className="text-[11px] font-display text-mono-400 uppercase tracking-wider">Sep 2026 – Present</span>
              </div>
              <p className="text-xs font-display text-mono-300 font-semibold mt-0.5">Jadetime Media • Colombo, Sri Lanka</p>
              <p className="text-xs text-mono-400 leading-relaxed font-body mt-2">
                Developing and maintaining high-traffic news portal platforms using Next.js and Tailwind CSS. Implementing responsive editorial designs and optimizing asset delivery pipelines.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-mono-600 border-2 border-mono-950 group-hover:bg-white group-hover:scale-125 transition-all"></div>
              <div className="flex items-baseline justify-between flex-wrap gap-1">
                <h4 className="font-syne font-bold text-sm text-white uppercase tracking-wide">Freelance Full Stack Developer</h4>
                <span className="text-[11px] font-display text-mono-400 uppercase tracking-wider">Nov 2025 – Present</span>
              </div>
              <p className="text-xs font-display text-mono-300 font-semibold mt-0.5">Self-Employed • Remote</p>
              <p className="text-xs text-mono-400 leading-relaxed font-body mt-2">
                Architecting bespoke digital applications for businesses: delivered DD Photography 95 portfolio, Trio Treats bakery e-commerce with 3D models, and university laboratory booking system.
              </p>
            </div>
          </div>
        </section>

        <section className="lg:col-span-6 border border-mono-800 bg-mono-900/80 backdrop-blur p-6 sm:p-8 rounded-sm">
          <div className="mb-6 flex items-center justify-between border-b border-mono-800 pb-3">
            <div>
              <h3 className="font-anton text-2xl tracking-wider text-white uppercase leading-none">EDUCATION</h3>
              <div className="w-10 h-0.5 bg-white mt-2"></div>
            </div>
            <span className="text-xs font-display text-mono-400 uppercase tracking-widest">ACADEMICS</span>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-mono-800">
            <div className="relative group">
              <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-mono-950 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
              <div className="flex items-baseline justify-between flex-wrap gap-1">
                <h4 className="font-syne font-bold text-sm text-white uppercase tracking-wide">BSc (Hons) in Software Engineering</h4>
                <span className="text-[11px] font-display text-mono-400 uppercase tracking-wider">2025 – 2028 (Undergraduate)</span>
              </div>
              <p className="text-xs font-display text-mono-300 font-semibold mt-0.5">NSBM Green University • Homagama</p>
              <p className="text-xs text-mono-400 leading-relaxed font-body mt-2">
                Focusing on Object-Oriented Architecture, Data Structures &amp; Algorithms, Database Engineering, and Software Design Patterns.
              </p>
              <div className="mt-2.5 inline-flex items-center gap-2 px-2.5 py-1 bg-mono-850 border border-mono-700 text-[11px] font-display text-white rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span>Academic Standing: GPA 3.7+</span>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-mono-600 border-2 border-mono-950 group-hover:bg-white group-hover:scale-125 transition-all"></div>
              <div className="flex items-baseline justify-between flex-wrap gap-1">
                <h4 className="font-syne font-bold text-sm text-white uppercase tracking-wide">Secondary Education — Physical Science</h4>
                <span className="text-[11px] font-display text-mono-400 uppercase tracking-wider">G.C.E. Advanced Level</span>
              </div>
              <p className="text-xs font-display text-mono-300 font-semibold mt-0.5">Physical Science Stream • Mathematics &amp; Physics</p>
              <p className="text-xs text-mono-400 leading-relaxed font-body mt-2">
                Strong mathematical and analytical foundations in calculus, algebra, and classical physics.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ================= CERTIFICATES ================= */}
      <section id="certificates" className="border border-mono-800 bg-mono-900/80 backdrop-blur p-6 sm:p-8 rounded-sm">
        <div className="mb-6 flex items-center justify-between border-b border-mono-800 pb-3">
          <div>
            <h3 className="font-anton text-2xl tracking-wider text-white uppercase leading-none">VERIFIED CERTIFICATES</h3>
            <div className="w-10 h-0.5 bg-white mt-2"></div>
          </div>
          <span className="text-xs font-display text-mono-400 uppercase tracking-widest">CREDENTIALS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="tilt-card bg-mono-850 border border-mono-800 hover:border-white transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between group shadow-lg">
            <div>
              <div className="aspect-[4/3] w-full bg-mono-900 overflow-hidden relative border-b border-mono-800">
                <Image
                  src="/certificates/cert-cognitiveai.png"
                  alt="Python for Beginners - CognitiveAI"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/85 text-[10px] font-display text-white border border-mono-700">VERIFIED PDF</div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-display text-mono-400 uppercase tracking-widest block font-bold">COGNITIVEAI CLASS</span>
                <h4 className="font-syne font-bold text-sm text-white uppercase mt-1 leading-snug">Python for Beginners</h4>
                <p className="text-xs text-mono-400 font-body leading-relaxed mt-2">
                  Core programmatic fundamentals, algorithmic problem solving, loops, functions, and data structures in Python.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <a
                href="/certificates/certificate 1 cognitvieai class python for beginners.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-mono-900 border border-mono-700 hover:border-white text-center text-white text-xs font-display font-semibold transition flex items-center justify-center gap-2 rounded-sm group-hover:bg-white group-hover:text-black"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>VIEW CERTIFICATE PDF</span>
              </a>
            </div>
          </div>

          <div className="tilt-card bg-mono-850 border border-mono-800 hover:border-white transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between group shadow-lg">
            <div>
              <div className="aspect-[4/3] w-full bg-mono-900 overflow-hidden relative border-b border-mono-800">
                <Image
                  src="/certificates/cert-uom.png"
                  alt="Python for Beginners - University of Moratuwa"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/85 text-[10px] font-display text-white border border-mono-700">VERIFIED PDF</div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-display text-mono-400 uppercase tracking-widest block font-bold">UNIVERSITY OF MORATUWA</span>
                <h4 className="font-syne font-bold text-sm text-white uppercase mt-1 leading-snug">Python for Beginners</h4>
                <p className="text-xs text-mono-400 font-body leading-relaxed mt-2">
                  Certified Python program covering algorithmic thinking, file handling, and computational logic certified by Department of Computer Science &amp; Engineering.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <a
                href="/certificates/Certificate 2 Uom Python for Beginners.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-mono-900 border border-mono-700 hover:border-white text-center text-white text-xs font-display font-semibold transition flex items-center justify-center gap-2 rounded-sm group-hover:bg-white group-hover:text-black"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>VIEW CERTIFICATE PDF</span>
              </a>
            </div>
          </div>

          <div className="tilt-card bg-mono-850 border border-mono-800 hover:border-white transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between group shadow-lg">
            <div>
              <div className="aspect-[4/3] w-full bg-mono-900 overflow-hidden relative border-b border-mono-800">
                <Image
                  src="/certificates/TechMath.jpg"
                  alt="TechMath Competition"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/85 text-[10px] font-display text-white border border-mono-700">ACHIEVEMENT</div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-display text-mono-400 uppercase tracking-widest block font-bold">STEMUP / TECHMATH</span>
                <h4 className="font-syne font-bold text-sm text-white uppercase mt-1 leading-snug">TechMath Competition</h4>
                <p className="text-xs text-mono-400 font-body leading-relaxed mt-2">
                  Certificate of participation and achievement in mathematical and logical problem solving competition organized for tech students.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <a
                href="/certificates/TechMath.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-mono-900 border border-mono-700 hover:border-white text-center text-white text-xs font-display font-semibold transition flex items-center justify-center gap-2 rounded-sm group-hover:bg-white group-hover:text-black"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>VIEW HIGH-RES IMAGE</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
