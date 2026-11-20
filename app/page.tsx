'use client';

export default function Home() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0, backgroundColor: '#060608', overflowX: 'hidden' }}>
      <iframe
        src="/portfolio.html"
        title="Panchadsaram Kukarakshan Portfolio"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          display: 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      />
    </div>
  );
}
