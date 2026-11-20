import Link from 'next/link';
import Image from 'next/image';
import { Download, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full border-b border-mono-700/80 bg-[#060608]/90 backdrop-blur-md px-4 sm:px-8 md:px-12 py-3.5 text-xs uppercase tracking-widest flex items-center justify-between z-50 shadow-[0_4px_30px_rgba(0,0,0,0.95)] transition-all">
      <div className="flex items-center gap-3">
        <Link href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 p-1 rounded-xl bg-black border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.7)]">
            <Image
              src="/logo.png"
              alt="Rakshan Logo"
              width={38}
              height={38}
              className="object-contain filter brightness-125 contrast-125 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)] transition-all duration-300"
            />
          </div>
          <span className="font-display font-black text-lg tracking-wider text-white hidden sm:inline drop-shadow-[0_0_16px_rgba(255,255,255,0.9)] cursor-pointer">
            KUKARAKSHAN
          </span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-7 text-xs font-display font-extrabold text-white tracking-widest">
        <a href="#about" className="hover:text-white transition drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">ABOUT</a>
        <a href="#services" className="hover:text-white transition drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">SERVICES</a>
        <a href="#projects" className="hover:text-white transition drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">PROJECTS</a>
        <a href="#experience" className="hover:text-white transition drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">EXPERIENCE</a>
        <a href="#certificates" className="hover:text-white transition drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">CERTIFICATES</a>
        <a href="#interactive-3d" className="hover:text-white transition drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">3D LAB</a>
        <a href="#contact" className="hover:text-white transition drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">CONTACT</a>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="/Kukarakshan_CV.pdf"
          download="Kukarakshan_CV.pdf"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 border-2 border-white bg-mono-900 text-white font-black hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,1)] text-xs font-display rounded-sm shadow-md transition-all"
        >
          <Download className="w-4 h-4" />
          <span>CV (PDF)</span>
        </a>
        <a
          href="https://wa.me/94756027337?text=Hello%20Kukarakshan!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white text-black border-2 border-white text-xs font-display font-black rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:bg-neutral-100 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-black" />
          <span className="text-black font-extrabold">WHATSAPP</span>
        </a>
      </div>
    </header>
  );
}

