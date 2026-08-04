import React, { useState } from 'react';
import { 
  UserCheck, Stethoscope, FileText, ShieldAlert, Microscope, Heart, 
  Syringe, Building2, ChevronRight, Clock, CheckCircle2, ArrowRight, Sparkles 
} from 'lucide-react';
import { SERVICES, HOSPITAL_INFO } from '../data/hospitalData';
import { HospitalService } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [modalService, setModalService] = useState<HospitalService | null>(null);

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-blue-600" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-teal-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-indigo-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-rose-600" />;
      case 'Microscope': return <Microscope className="w-6 h-6 text-amber-600" />;
      case 'Heart': return <Heart className="w-6 h-6 text-emerald-600" />;
      case 'Syringe': return <Syringe className="w-6 h-6 text-purple-600" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-sky-600" />;
      default: return <Stethoscope className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
            <Stethoscope className="w-4 h-4 text-blue-700" /> Comprehensive Clinical Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Healthcare Under One Roof
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From routine physician consultations to emergency trauma care and full-body diagnostic pathology in Kotdwar.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'primary', label: 'Primary Medicine & OPD' },
            { id: 'diagnostic', label: 'Diagnostics & Pathology' },
            { id: 'emergency', label: '24/7 Emergency Care' },
            { id: 'specialty', label: 'Vaccination & Wellness' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center border border-slate-100 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.category === 'emergency' && (
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 animate-pulse">
                      24/7 OPEN
                    </span>
                  )}
                </div>

                {/* Service Title & Desc */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-1.5 pt-2">
                  {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setModalService(service)}
                  className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectService(service.id)}
                  className="text-xs font-bold bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white px-3 py-1.5 rounded-lg transition-all cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {modalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-slate-100">
            {/* Close Cross */}
            <button
              onClick={() => setModalService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                {getServiceIcon(modalService.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{modalService.title}</h3>
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                  {modalService.doctorInCharge || 'Dr. Arun Negi & Medical Team'}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {modalService.fullDesc}
              </p>

              {modalService.timing && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs font-medium text-slate-700">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Service Timing: <strong>{modalService.timing}</strong></span>
                </div>
              )}

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Highlights</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {modalService.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal CTA */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setModalService(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const sId = modalService.id;
                  setModalService(null);
                  onSelectService(sId);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
