'use client';

import { useEffect, useRef } from 'react';
import { rawHtml } from './portfolio_raw';

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(rawHtml);
    doc.close();

    // Adjust height dynamically to prevent inner scrollbar and ensure native fluid scrolling
    const resizeObserver = () => {
      try {
        const body = doc.body;
        const html = doc.documentElement;
        if (body && html) {
          const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
          );
          iframe.style.height = `${height}px`;
        }
      } catch (e) {
        // cross-domain protection fallback
      }
    };

    const interval = setInterval(resizeObserver, 300);
    window.addEventListener('resize', resizeObserver);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeObserver);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#060608] overflow-x-hidden">
      <iframe
        ref={iframeRef}
        title="Kukarakshan Portfolio"
        className="w-full border-0 block"
        style={{ minHeight: '100vh', width: '100%', overflow: 'hidden' }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
      />
    </div>
  );
}
