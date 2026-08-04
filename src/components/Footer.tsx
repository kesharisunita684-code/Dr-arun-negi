import React from 'react';
import { Stethoscope, Star, Phone, Mail, MapPin, Clock, Heart, ShieldAlert, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { HOSPITAL_INFO, SERVICES } from '../data/hospitalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Google Rating Badge */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white shadow-md">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold text-white block">
                  Dr. Arun Negi's Hospital
                </span>
                <span className="text-xs text-teal-400 font-semibold uppercase tracking-wider">
                  Kotdwar • Uttarakhand
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing compassionate, affordable, and advanced internal medicine care with experienced doctors and modern diagnostic facilities in Kotdwar.
            </p>

            {/* Google Rating Badge */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 inline-flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Star className="w-6 h-6 fill-amber-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>5.0 / 5 Rating</span>
                  <span className="text-xs text-slate-400">(1,285+ Reviews)</span>
                </div>
                <div className="text-xs text-teal-400 font-medium">Verified Google Business Profile</div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-sky-500 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-rose-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-800" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-teal-300 transition-colors">Home Page</a></li>
              <li><a href="#about" className="hover:text-teal-300 transition-colors">About Hospital</a></li>
              <li><a href="#why-us" className="hover:text-teal-300 transition-colors">Why Choose Us</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Medical Services</a></li>
              <li><a href="#packages" className="hover:text-teal-300 transition-colors">Health Checkup Packages</a></li>
              <li><a href="#reviews" className="hover:text-teal-300 transition-colors">Patient Reviews</a></li>
              <li><a href="#gallery" className="hover:text-teal-300 transition-colors">Hospital Gallery</a></li>
              <li><a href="#appointment" className="hover:text-teal-300 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Col 3: Medical Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Hospital Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-teal-300 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info & Emergency */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${HOSPITAL_INFO.phone}`} className="hover:text-white font-bold text-teal-300">
                  {HOSPITAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{HOSPITAL_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2.5 pt-2 border-t border-slate-900">
                <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-rose-400 font-bold">
                  24/7 Emergency Ward Open Always
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & SEO Tagline */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © 2026 Dr. Arun Negi's Hospital. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Badrinath Marg, Jhanda Chowk, Kotdwar, Uttarakhand 246149</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
