import React from 'react';
import { Award, Heart, ShieldCheck, Stethoscope, Users, Check, Building2, Activity } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700">
            <Building2 className="w-4 h-4" /> About Hospital
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Leading Medical Excellence in Kotdwar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Dedicated to delivering compassionate, patient-first healthcare with modern diagnostic precision and ethical clinical practice.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Doctor & Facility Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white group">
              <img
                src={HOSPITAL_INFO.images.doctorConsultation}
                alt="Dr. Arun Negi Consulting Patient in Kotdwar Hospital"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xl font-bold">{HOSPITAL_INFO.doctorName}</div>
                <div className="text-xs text-teal-300 font-semibold">{HOSPITAL_INFO.doctorDegree}</div>
                <p className="text-xs text-slate-300 leading-normal pt-1">
                  Founder & Senior Consultant Physician committed to health & wellness across Pauri Garhwal.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-blue-600 text-white p-5 rounded-2xl shadow-xl border-4 border-white flex items-center gap-4">
              <div className="text-3xl font-extrabold">15+</div>
              <div className="text-xs font-semibold leading-tight">
                Years of <br />Clinical Trust
              </div>
            </div>
          </div>

          {/* Right Narrative & 4 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                Welcome to Dr. Arun Negi's Hospital, Kotdwar
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Situated at <strong>Badrinath Marg, Jhanda Chowk, Kotdwar</strong>, Dr. Arun Negi's Hospital stands as a beacon of medical trust and quality care. Founded with a vision to make advanced internal medicine and primary healthcare accessible and affordable to every family in Uttarakhand.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether managing acute fever illnesses, chronic conditions like diabetes and hypertension, or responding to urgent nighttime medical emergencies, our clinic combines warm, empathetic doctor consultation with modern diagnostic accuracy.
              </p>
            </div>

            {/* 4 Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-base">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>Patient-First Care</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every patient receives empathetic listening, individual attention, and customized medical treatment.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2.5 text-teal-700 font-bold text-base">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-4 h-4 text-teal-600" />
                  </div>
                  <span>Experienced Physician</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dr. Arun Negi brings extensive clinical knowledge in general medicine and disease prevention.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2.5 text-indigo-700 font-bold text-base">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span>Advanced Diagnostics</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In-house pathology testing, blood analysis, and digital ECG for prompt and accurate diagnosis.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-base">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span>Modern Treatment</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Evidence-based therapeutic protocols, sterile OPD procedures, and gentle recovery support.
                </p>
              </div>
            </div>

            {/* Trust Quote Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 flex items-start gap-4">
              <Award className="w-8 h-8 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-slate-800 text-sm">
                <span className="font-bold block text-slate-900">Rated #1 Hospital in Kotdwar for Patient Satisfaction</span>
                <p className="text-xs text-slate-600">
                  "Our philosophy is simple: Treat every patient like family with complete honesty, medical precision, and utmost respect." — Dr. Arun Negi
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
