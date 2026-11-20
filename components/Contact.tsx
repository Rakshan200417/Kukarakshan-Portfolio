'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });

  const EMAILJS_SERVICE_ID = 'service_mwdkozi';
  const EMAILJS_TEMPLATE_ID = 'template_75thqus';
  const EMAILJS_PUBLIC_KEY = 'As8dadCQLQK6k-Yj1';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          topic: formData.topic || 'Portfolio General Inquiry',
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setResult({
        type: 'success',
        message: '✓ Message received! Kukarakshan will reply to your email shortly.',
      });
      setFormData({ name: '', email: '', topic: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setResult({
        type: 'error',
        message: '✗ Error dispatching message. Please reach me directly on WhatsApp (+94 75 602 7337).',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="border border-mono-800 bg-mono-900/80 backdrop-blur p-6 sm:p-8 rounded-sm">
      <div className="mb-8 border-b border-mono-800 pb-3">
        <h3 className="font-anton text-2xl tracking-wider text-white uppercase leading-none">LET&apos;S COLLABORATE</h3>
        <div className="w-10 h-0.5 bg-white mt-2"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT */}
        <div className="lg:col-span-4 space-y-5 font-display text-xs">
          <div>
            <h4 className="font-anton text-lg text-white uppercase tracking-wide">DIRECT INQUIRIES</h4>
            <p className="text-mono-400 leading-relaxed font-body text-xs mt-1">
              Have an internship offer, freelance project, or collaboration? Reach out directly via the form or through WhatsApp.
            </p>
          </div>

          <div className="space-y-3 pt-2 text-xs">
            <a
              href="mailto:kukarakshan2004@gmail.com"
              className="flex items-center gap-3 p-3 bg-mono-850 border border-mono-800 hover:border-white transition rounded-sm"
            >
              <Mail className="w-4 h-4 text-white" />
              <span className="text-white">kukarakshan2004@gmail.com</span>
            </a>
            <a
              href="tel:+94756027337"
              className="flex items-center gap-3 p-3 bg-mono-850 border border-mono-800 hover:border-white transition rounded-sm"
            >
              <Phone className="w-4 h-4 text-white" />
              <span className="text-white">+94 75 602 7337</span>
            </a>
            <div className="flex items-center gap-3 p-3 bg-mono-850 border border-mono-800 rounded-sm text-mono-400">
              <MapPin className="w-4 h-4 text-white" />
              <span>Homagama, Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* MIDDLE: Form */}
        <div className="lg:col-span-5 bg-mono-850 p-6 border border-mono-800 rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-4 font-display text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-[10px] text-mono-400 uppercase tracking-widest mb-1">YOUR NAME *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Smith"
                  className="w-full bg-mono-900 border border-mono-700 focus:border-white focus:outline-none px-3.5 py-2.5 text-white placeholder:text-neutral-600 rounded-sm font-body"
                />
              </div>
              <div>
                <label className="block text-[10px] text-mono-400 uppercase tracking-widest mb-1">YOUR EMAIL *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-mono-900 border border-mono-700 focus:border-white focus:outline-none px-3.5 py-2.5 text-white placeholder:text-neutral-600 rounded-sm font-body"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-mono-400 uppercase tracking-widest mb-1">SUBJECT / TOPIC</label>
              <input
                type="text"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                placeholder="Internship Opportunity / Freelance Project"
                className="w-full bg-mono-900 border border-mono-700 focus:border-white focus:outline-none px-3.5 py-2.5 text-white placeholder:text-neutral-600 rounded-sm font-body"
              />
            </div>

            <div>
              <label className="block text-[10px] text-mono-400 uppercase tracking-widest mb-1">MESSAGE *</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, timeline, or position..."
                className="w-full bg-mono-900 border border-mono-700 focus:border-white focus:outline-none px-3.5 py-2.5 text-white placeholder:text-neutral-600 resize-none rounded-sm font-body"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition flex items-center justify-center gap-2 text-xs rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>DISPATCHING...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>SEND TO KUKARAKSHAN</span>
                </>
              )}
            </button>

            {result && (
              <div
                className={`p-3 text-xs font-display rounded-sm border ${
                  result.type === 'success'
                    ? 'bg-neutral-900 text-white border-emerald-400'
                    : 'bg-red-950/60 text-red-300 border-red-700'
                }`}
              >
                {result.message}
              </div>
            )}
          </form>
        </div>

        {/* RIGHT: QR Codes */}
        <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[10px] font-display text-mono-400 uppercase tracking-widest block mb-3">
              SCAN TO CONNECT
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/kukarakshan-panchadsaram-84709b350"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group block"
              >
                <div className="w-24 h-24 bg-white p-1 rounded-md flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:ring-2 group-hover:ring-white transition-all relative">
                  <Image
                    src="/qr-linkedin.png"
                    alt="LinkedIn QR Code"
                    width={88}
                    height={88}
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-display text-mono-200 uppercase block mt-1.5 group-hover:text-white font-bold transition">
                  LINKEDIN
                </span>
              </a>

              <a
                href="https://github.com/Rakshan200417"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group block"
              >
                <div className="w-24 h-24 bg-white p-1 rounded-md flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:ring-2 group-hover:ring-white transition-all relative">
                  <Image
                    src="/qr-github.png"
                    alt="GitHub QR Code"
                    width={88}
                    height={88}
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-display text-mono-200 uppercase block mt-1.5 group-hover:text-white font-bold transition">
                  GITHUB
                </span>
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-mono-800">
            <p className="font-body italic text-xs text-mono-300 leading-snug">
              Designing experiences. Building connections.
            </p>
            <div className="font-signature text-3xl text-white mt-1">
              Kukarakshan P.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
