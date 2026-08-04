import React, { useState } from 'react';
import { X, Stethoscope, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/hospitalData';

interface SymptomCheckerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceId: string) => void;
}

export const SymptomCheckerModal: React.FC<SymptomCheckerProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);

  if (!isOpen) return null;

  const symptomsList = [
    { name: 'Fever, Body Ache, Cold & Cough', serviceId: 'general-medicine', dept: 'General Medicine' },
    { name: 'Diabetes, High BP, Routine Consultation', serviceId: 'physician-consultation', dept: 'Physician Consultation' },
    { name: 'Routine Blood Test / Full Body Screening', serviceId: 'health-checkups', dept: 'Health Checkups' },
    { name: 'Chest Pain, Breathlessness, Emergency', serviceId: 'emergency-care', dept: '24/7 Emergency Ward' },
    { name: 'Lab Tests, Blood Sugar, Cholesterol', serviceId: 'diagnostics', dept: 'Diagnostics & Pathology' },
    { name: 'Adult Vaccination & Seasonal Flu Shots', serviceId: 'vaccination', dept: 'Vaccination Services' },
    { name: 'Wound Dressing, Injections, Minor Procedures', serviceId: 'opd-services', dept: 'OPD Services' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-slate-100">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
            <Stethoscope className="w-3.5 h-3.5" /> Symptom Guide
          </div>
          <h3 className="text-2xl font-bold text-slate-900">What symptoms are you experiencing?</h3>
          <p className="text-xs text-slate-500">
            Select your primary symptom to find the recommended department at Dr. Arun Negi's Hospital.
          </p>
        </div>

        <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
          {symptomsList.map((item, idx) => {
            const isSelected = selectedSymptom === item.name;
            return (
              <div
                key={idx}
                onClick={() => setSelectedSymptom(item.name)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-blue-50 border-blue-500 text-blue-900 shadow-sm'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-xs sm:text-sm">{item.name}</div>
                  <div className="text-[11px] font-semibold text-teal-600">
                    Recommended: {item.dept}
                  </div>
                </div>

                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'
                }`}>
                  {isSelected && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Action */}
        <div className="pt-2 flex justify-end gap-3 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-500 hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            disabled={!selectedSymptom}
            onClick={() => {
              const matched = symptomsList.find((s) => s.name === selectedSymptom);
              if (matched) {
                onClose();
                onSelectService(matched.serviceId);
              }
            }}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs text-white shadow-md transition-all flex items-center gap-1.5 ${
              selectedSymptom ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' : 'bg-slate-300 cursor-not-allowed'
            }`}
          >
            <span>Proceed to Booking</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
