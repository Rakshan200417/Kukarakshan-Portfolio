import Header from '@/components/Header';
import ThreeBackground from '@/components/ThreeBackground';
import Hero from '@/components/Hero';
import BentoSections from '@/components/BentoSections';
import Interactive3D from '@/components/Interactive3D';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060608] text-[#e6e6f0] overflow-x-hidden selection:bg-white selection:text-black font-sans">
      {/* Three.js Starlight Particle Mesh Background */}
      <ThreeBackground />

      {/* High-Contrast Sticky Navigation Header */}
      <Header />

      {/* Main Single-Page App Container */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Bento Grid: Services, Process, Projects, About, Tools & AI Knowledge, Timeline, Certificates */}
        <BentoSections />

        {/* Interactive 3D Lab with Earth.glb & Live Deployed 3D Sites */}
        <Interactive3D />

        {/* EmailJS Contact Section & QR Codes */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
