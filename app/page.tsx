import Header from '@/components/Header';
import ThreeBackground from '@/components/ThreeBackground';
import Hero from '@/components/Hero';
import BentoSections from '@/components/BentoSections';
import Interactive3D from '@/components/Interactive3D';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider';

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <div className="relative min-h-screen bg-[#060608] text-[#e6e6f0] overflow-x-hidden selection:bg-white selection:text-black font-sans">
        {/* Three.js Starlight Particle Mesh Background */}
        <ThreeBackground />

        {/* High-Contrast Sticky Navigation Header */}
        <Header />

        {/* Main Single-Page App Container with left/right page margins and vertical spacing between sections */}
        <main className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col gap-12 sm:gap-16 md:gap-20 pb-20">
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
    </ScrollAnimationProvider>
  );
}
