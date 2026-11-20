'use client';

import { useEffect, useRef } from 'react';
import { portfolioHtml } from './portfolioHtml';

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(portfolioHtml);
      doc.close();
    }
  }, []);

  return (
    <main style={{ width: '100%', height: '100vh', margin: 0, padding: 0, backgroundColor: '#060608', overflow: 'hidden' }}>
      <iframe
        ref={iframeRef}
        srcDoc={portfolioHtml}
        title="Panchadsaram Kukarakshan Portfolio"
        style={{
          width: '100vw',
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
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
      />
    </main>
  );
}
