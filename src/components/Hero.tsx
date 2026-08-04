import React from 'react';
import { Calendar, Phone, Star, ShieldCheck, Award, Heart, CheckCircle2, ArrowRight, Activity, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white overflow-hidden">
      {/* Background Glows & Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & CTA Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Top Pill Tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-teal-400" /> Badrinath Marg, Jhanda Chowk, Kotdwar
              </span>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>5.0 Google Rating</span>
                <span className="text-slate-400 hidden sm:inline">(1,285 Reviews)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Trusted Healthcare for You & Your Family
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                Providing compassionate, affordable, and advanced medical care with experienced doctors and modern facilities in Kotdwar, Uttarakhand.
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-slate-200 text-sm font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Expert Physician Care (Dr. Arun Negi)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                <span>24/7 Emergency & Ambulance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Advanced Pathology & ECG Labs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Clean, Hygienic & Patient-First</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-teal-500 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-base px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5 text-teal-400" />
                <span>Call Now: +91 73009 65505</span>
              </a>
            </div>

            {/* Micro Stats Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">15+</div>
                <div className="text-xs text-slate-400 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">1,285+</div>
                <div className="text-xs text-slate-400 font-medium">5-Star Reviews</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">24/7</div>
                <div className="text-xs text-slate-400 font-medium">Emergency OPD</div>
              </div>
            </div>

          </div>

          {/* Right Image Banner & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl blur opacity-30 animate-pulse" />
              
              {/* Main Banner Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-800">
                <img
                  src={HOSPITAL_INFO.images.heroBanner}
                  alt="Dr. Arun Negi's Hospital Exterior Kotdwar"
                  className="w-full h-[360px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Overlay Doctor Info Badge at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{HOSPITAL_INFO.doctorName}</div>
                    <div className="text-xs text-teal-300 font-medium">{HOSPITAL_INFO.doctorDegree}</div>
                    <div className="text-[11px] text-slate-400">Senior Physician & Consultant</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/30 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Top Floating Emergency Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-slate-900/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-slate-700/80 shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Emergency Hotline</div>
                  <div className="text-xs text-rose-400 font-extrabold">+91 73009 65505</div>
                </div>
              </div>

              {/* Bottom Right Google Rating Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-slate-900/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-slate-700/80 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Google Verified</div>
                  <div className="text-xs text-amber-300 font-semibold">⭐⭐⭐⭐⭐ 5.0 Rating</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
