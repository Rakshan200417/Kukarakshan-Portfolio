import Link from 'next/link';
import Image from 'next/image';
import { Download, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-mono-800/80 bg-mono-950/95 backdrop-blur sticky top-0 px-4 sm:px-8 md:px-12 py-3 text-xs uppercase tracking-widest flex items-center justify-between z-50">
      <div className="flex items-center gap-3">
        <Link href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 p-1 rounded-md bg-mono-900 border border-white/20 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all shadow-md relative">
            <Image
              src="/public/logo.png"
              alt="Rakshan Logo"
              width={36}
              height={36}
              className="object-contain filter drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] group-hover:scale-110 transition-transform"
            />
          </div>
          <span className="font-display font-bold text-sm tracking-wider text-white hidden sm:inline">KUKARAKSHAN</span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-6 text-xs font-display font-semibold text-mono-400">
        <a href="#about" className="hover:text-white hover:brightness-150 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-200">ABOUT</a>
        <a href="#services" className="hover:text-white hover:brightness-150 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-200">SERVICES</a>
        <a href="#projects" className="hover:text-white hover:brightness-150 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-200">PROJECTS</a>
        <a href="#experience" className="hover:text-white hover:brightness-150 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-200">EXPERIENCE</a>
        <a href="#certificates" className="hover:text-white hover:brightness-150 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-200">CERTIFICATES</a>
        <a href="#interactive-3d" className="hover:text-white hover:brightness-150 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-200">3D LAB</a>
        <a href="#contact" className="hover:text-white hover:brightness-150 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-200">CONTACT</a>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="/public/Kukarakshan_CV.pdf"
          download="Kukarakshan_CV.pdf"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-mono-700 hover:border-white hover:text-white hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all text-[11px] font-display rounded-sm"
        >
          <Download className="w-3.5 h-3.5" />
          <span>CV (PDF)</span>
        </a>
        <a
          href="https://wa.me/94756027337?text=Hello%20Kukarakshan!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.9)] hover:scale-105 transition-all text-[11px] font-display font-bold rounded-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </header>
  );
}
