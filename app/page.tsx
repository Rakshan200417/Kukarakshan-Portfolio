import Header from '@/components/Header';
import ThreeBackground from '@/components/ThreeBackground';
import Hero from '@/components/Hero';
import BentoSections from '@/components/BentoSections';
import Interactive3D from '@/components/Interactive3D';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#ededed] overflow-x-hidden selection:bg-white selection:text-black font-sans">
      {/* Dynamic 3D Starfield Background */}
      <ThreeBackground />

      {/* Sticky Navigation Bar */}
      <Header />

      {/* Main Container */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Bento Sections: What I Do, Process, Featured Work, About, Timeline, Certificates */}
        <BentoSections />

        {/* Interactive 3D Lab with Earth.glb & Sri Lanka Pin + Live 3D Previews */}
        <Interactive3D />

        {/* EmailJS Contact Section & QR Codes */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
