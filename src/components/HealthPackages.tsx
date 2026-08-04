import React from 'react';
import { FileText, CheckCircle2, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { HEALTH_PACKAGES } from '../data/hospitalData';

interface HealthPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const HealthPackages: React.FC<HealthPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 bg-white relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
            <FileText className="w-4 h-4 text-teal-700" /> Preventive Care & Checkups
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Affordable Preventive Health Packages
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Early detection is the key to longevity. Choose from our curated pathology screening packages with doctor consultation.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HEALTH_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 transition-all duration-300 relative flex flex-col justify-between ${
                pkg.popular
                  ? 'bg-gradient-to-b from-slate-900 to-blue-950 text-white shadow-2xl border-2 border-teal-400 scale-105 z-10'
                  : 'bg-slate-50 text-slate-900 border border-slate-200/90 hover:border-blue-300 hover:shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-extrabold text-xs uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Most Popular Choice
                </div>
              )}

              <div className="space-y-6">
                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className={`text-xs mt-1 leading-relaxed ${pkg.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pkg.tagline}
                  </p>
                </div>

                {/* Pricing & Test Count */}
                <div className="flex items-baseline gap-3 pb-4 border-b border-slate-200/20">
                  <span className="text-4xl font-extrabold">{pkg.price}</span>
                  {pkg.originalPrice && (
                    <span className={`text-sm line-through ${pkg.popular ? 'text-slate-400' : 'text-slate-400'}`}>
                      {pkg.originalPrice}
                    </span>
                  )}
                  <span className={`ml-auto text-xs font-extrabold px-3 py-1 rounded-full ${
                    pkg.popular ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {pkg.testsCount} Tests Included
                  </span>
                </div>

                {/* Test Includes List */}
                <div className="space-y-3">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    pkg.popular ? 'text-teal-300' : 'text-slate-500'
                  }`}>
                    Key Tests & Features
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-medium leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.popular ? 'text-teal-400' : 'text-teal-600'
                        }`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className={`text-center text-[11px] mt-2 font-medium ${
                  pkg.popular ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {pkg.recommendedFor}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
