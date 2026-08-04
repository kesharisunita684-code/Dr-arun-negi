import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ExternalLink, CheckCircle2, Navigation } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const ContactSection: React.FC = () => {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [inquirySent, setInquirySent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const whatsappLink = `https://wa.me/${HOSPITAL_INFO.rawPhone}?text=${encodeURIComponent(
    "Hello Dr. Arun Negi's Hospital, I would like to inquire about medical services."
  )}`;

  return (
    <section id="contact" className="py-20 bg-white relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
            <MapPin className="w-4 h-4 text-blue-700" /> Contact & Location
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch or Visit Us in Kotdwar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Located conveniently on Badrinath Marg near Jhanda Chowk. Reach out to us via phone, WhatsApp, or contact form.
          </p>
        </div>

        {/* Top Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Address */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Hospital Address</div>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                {HOSPITAL_INFO.address}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Call Us (24/7)</div>
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="text-xs font-extrabold text-blue-600 hover:underline block mt-1"
              >
                {HOSPITAL_INFO.phone}
              </a>
              <span className="text-[10px] text-slate-500">Emergency & General Inquiry</span>
            </div>
          </div>

          {/* Hours */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">OPD Timings</div>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Mon-Sat: 09:00 AM - 08:00 PM<br />
                Sun: 09:00 AM - 02:00 PM<br />
                <span className="text-rose-600 font-bold">Emergency 24x7</span>
              </p>
            </div>
          </div>

          {/* Instant Chat */}
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">WhatsApp Chat</div>
              <p className="text-xs text-slate-600 mt-1">
                Instant response for appointment & lab report queries.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline mt-2"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Grid: Google Maps Embed + Contact Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map & Click-to-Call / WhatsApp Buttons */}
          <div className="lg:col-span-6 space-y-6 flex flex-col">
            <div className="bg-slate-100 rounded-3xl overflow-hidden border border-slate-200/90 shadow-md h-80 sm:h-96 relative">
              <iframe
                title="Dr. Arun Negi's Hospital Location Map"
                src={HOSPITAL_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="w-full py-3.5 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Click-to-Call (+91 73009 65505)</span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>

            {/* Directions Guide Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-blue-600" />
                <span>How to Reach Dr. Arun Negi's Hospital</span>
              </div>
              <p className="leading-relaxed">
                • <strong>From Kotdwar Railway Station:</strong> ~1.2 km away (5 minutes by auto/taxi along Badrinath Marg towards Jhanda Chowk).<br />
                • <strong>From Bus Stand Kotdwar:</strong> ~800 meters away (3 minutes walk or 2 minutes by auto).
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send an Inquiry</h3>
              <p className="text-xs text-slate-600 mb-6">
                Have questions about treatments, tests, or doctors? Fill out the form below and we will get back to you promptly.
              </p>

              {inquirySent ? (
                <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-2 my-8">
                  <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
                  <div className="text-lg font-bold text-slate-900">Inquiry Received!</div>
                  <p className="text-xs text-slate-600">
                    Our reception desk at Jhanda Chowk will respond to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      placeholder="e.g. Surendra Singh"
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={inquiryData.phone}
                        onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-white border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                        placeholder="e.g. email@example.com"
                        className="w-full bg-white border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Subject</label>
                    <input
                      type="text"
                      value={inquiryData.subject}
                      onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                      placeholder="e.g. Lab test availability / OPD timings"
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                      placeholder="Type your query or health requirement here..."
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
