import { Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-mono-800 py-8 px-4 sm:px-8 md:px-12 text-center font-display text-xs text-mono-400 relative z-20 bg-mono-950/90 backdrop-blur">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>© 2026 KUKARAKSHAN PANCHADSARAM. ALL RIGHTS RESERVED.</div>

        <div className="flex items-center space-x-3 sm:space-x-4 text-mono-300">
          <a
            href="https://github.com/Rakshan200417"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition group"
            title="GitHub"
          >
            <div className="w-9 h-9 rounded-full bg-mono-900 border border-mono-700 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition shadow-sm">
              <i className="fa-brands fa-github text-base"></i>
            </div>
            <span className="text-[11px] uppercase font-bold hidden md:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kukarakshan-panchadsaram-84709b350"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition group"
            title="LinkedIn"
          >
            <div className="w-9 h-9 rounded-full bg-mono-900 border border-mono-700 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition shadow-sm">
              <i className="fa-brands fa-linkedin-in text-base"></i>
            </div>
            <span className="text-[11px] uppercase font-bold hidden md:inline">LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/rakshan7_k2?avpt=MWw2YjNudzg0b3Fqeg=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition group"
            title="Instagram"
          >
            <div className="w-9 h-9 rounded-full bg-mono-900 border border-mono-700 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition shadow-sm">
              <i className="fa-brands fa-instagram text-base"></i>
            </div>
            <span className="text-[11px] uppercase font-bold hidden md:inline">Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/share/1bpBv7T1wR/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition group"
            title="Facebook"
          >
            <div className="w-9 h-9 rounded-full bg-mono-900 border border-mono-700 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition shadow-sm">
              <i className="fa-brands fa-facebook-f text-base"></i>
            </div>
            <span className="text-[11px] uppercase font-bold hidden md:inline">Facebook</span>
          </a>

          <a
            href="/public/Kukarakshan_CV.pdf"
            download="Kukarakshan_CV.pdf"
            className="flex items-center gap-1.5 px-3 py-2 border border-mono-700 hover:border-white hover:text-white hover:bg-mono-900 text-[11px] font-bold rounded-sm transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
