import React from 'react';
import { Stethoscope, Activity, HeartHandshake, IndianRupee, Ambulance, ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, HOSPITAL_INFO } from '../data/hospitalData';

export const WhyChooseUs: React.FC = () => {
  // Map icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-blue-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-teal-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-indigo-600" />;
      case 'IndianRupee': return <IndianRupee className="w-6 h-6 text-emerald-600" />;
      case 'Ambulance': return <Ambulance className="w-6 h-6 text-rose-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-sky-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-600" />;
      case 'Award': return <Award className="w-6 h-6 text-purple-600" />;
      default: return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            <Award className="w-4 h-4 text-teal-700" /> Why Choose Dr. Arun Negi's Hospital
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Setting the Standard in Healthcare
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover why thousands of families across Kotdwar and Pauri Garhwal trust us for their health and medical needs.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon & Highlight Pill */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-blue-50 flex items-center justify-center shadow-sm border border-slate-100 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200/60 group-hover:bg-teal-100 text-slate-700 group-hover:text-teal-800 transition-colors">
                    {item.highlight}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Micro Indicator */}
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-teal-600 group-hover:text-blue-600 transition-colors">
                <span>Verified Quality Standard</span>
                <CheckCircle2 className="w-3.5 h-3.5 ml-auto" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-teal-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold">Need Urgent Doctor Advice or Emergency Care?</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Our medical response team and emergency consultation services at Jhanda Chowk, Kotdwar are ready 24 hours a day.
            </p>
          </div>
          <a
            href={`tel:${HOSPITAL_INFO.phone}`}
            className="shrink-0 bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-transform active:scale-95 text-sm inline-flex items-center gap-2"
          >
            <Ambulance className="w-4 h-4" />
            <span>Call +91 73009 65505</span>
          </a>
        </div>

      </div>
    </section>
  );
};
