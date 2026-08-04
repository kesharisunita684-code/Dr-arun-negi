import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, ShieldAlert } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const FloatingActions: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMsg = encodeURIComponent(
    "Hello Dr. Arun Negi's Hospital, I would like to inquire about medical appointment / OPD timings."
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900 text-white shadow-xl hover:bg-blue-600 transition-all pointer-events-auto border border-slate-700"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${HOSPITAL_INFO.rawPhone}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 pointer-events-auto border-2 border-white"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="hidden md:inline font-bold text-xs pr-1">WhatsApp Us</span>
      </a>

      {/* Emergency Call Floating Button */}
      <a
        href={`tel:${HOSPITAL_INFO.phone}`}
        className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 pointer-events-auto border-2 border-white animate-bounce"
        title="Emergency Call"
      >
        <Phone className="w-6 h-6" />
        <span className="hidden md:inline font-bold text-xs pr-1">24/7 Call</span>
      </a>

    </div>
  );
};
