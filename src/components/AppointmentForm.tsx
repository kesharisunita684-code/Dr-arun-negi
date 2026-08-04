import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Phone, Mail, User, MessageSquare, CheckCircle2, Sparkles, Send, Stethoscope, ArrowRight, Copy, Check } from 'lucide-react';
import { SERVICES, HOSPITAL_INFO } from '../data/hospitalData';
import { AppointmentData } from '../types';

interface AppointmentFormProps {
  selectedServiceId?: string;
  selectedPackageName?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  selectedServiceId,
  selectedPackageName,
}) => {
  const [formData, setFormData] = useState<AppointmentData>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: selectedServiceId || 'general-medicine',
    preferredDate: '',
    preferredTime: '09:00 AM - 12:00 PM',
    patientType: 'new',
    message: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
    if (selectedPackageName) {
      setFormData((prev) => ({
        ...prev,
        message: `Booking Request for Health Package: ${selectedPackageName}`,
      }));
    }
  }, [selectedServiceId, selectedPackageName]);

  // Set default min date to today
  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  const selectedServiceObj = SERVICES.find((s) => s.id === formData.serviceId);

  // Generate WhatsApp link pre-filled
  const whatsappMsg = encodeURIComponent(
    `Hello Dr. Arun Negi's Hospital, I would like to book an appointment.\n\n` +
    `👤 Name: ${formData.fullName}\n` +
    `📞 Phone: ${formData.phone}\n` +
    `✉️ Email: ${formData.email || 'N/A'}\n` +
    `🏥 Service: ${selectedServiceObj?.title || 'General Consultation'}\n` +
    `📅 Date: ${formData.preferredDate || 'Earliest Available'}\n` +
    `⏰ Time Slot: ${formData.preferredTime}\n` +
    `📝 Note: ${formData.message || 'None'}`
  );

  const whatsappUrl = `https://wa.me/${HOSPITAL_INFO.rawPhone}?text=${whatsappMsg}`;

  const copyAppointmentDetails = () => {
    const summaryText =
      `Appointment Request - Dr. Arun Negi's Hospital\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${selectedServiceObj?.title || 'Consultation'}\n` +
      `Date: ${formData.preferredDate || 'Today/Earliest'}\n` +
      `Slot: ${formData.preferredTime}\n` +
      `Hospital: Badrinath Marg, Jhanda Chowk, Kotdwar\n` +
      `Contact: ${HOSPITAL_INFO.phone}`;

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Contact Micro Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
              <Calendar className="w-4 h-4 text-blue-700" /> Easy Online Booking
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Schedule Your Consultation with Dr. Arun Negi
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Book your preferred doctor appointment slot in under 60 seconds. Our clinical team at Jhanda Chowk, Kotdwar will confirm your booking immediately.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">OPD Consultation Timings</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Monday – Saturday: 09:00 AM – 08:00 PM<br />
                    Sunday: 09:00 AM – 02:00 PM
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Direct Phone Booking</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Prefer calling? Speak directly with reception at <strong className="text-slate-900">{HOSPITAL_INFO.phone}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-xs text-teal-900 space-y-1">
              <span className="font-bold block">✨ Zero Advance Payment Required</span>
              <p className="text-teal-800">
                You can pay conveniently during your hospital consultation at Jhanda Chowk, Kotdwar via Cash, UPI, or Cards.
              </p>
            </div>
          </div>

          {/* Right Appointment Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 relative">
              
              {!bookingConfirmed ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">Book Doctor Appointment</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out your details below to request a consultation time slot.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ankit Sharma"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. ankit@gmail.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Select Service / Department <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.serviceId}
                          onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Date <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          min={todayStr}
                          required
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Time Slot <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="09:00 AM - 12:00 PM">Morning (09:00 AM - 12:00 PM)</option>
                          <option value="12:00 PM - 04:00 PM">Afternoon (12:00 PM - 04:00 PM)</option>
                          <option value="04:00 PM - 08:00 PM">Evening (04:00 PM - 08:00 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Symptoms / Health Notes
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your symptoms or reason for visit..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-extrabold text-base shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Book Appointment Now</span>
                  </button>
                </form>
              ) : (
                /* Success Confirmation Ticket Screen */
                <div className="space-y-6 text-center py-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-slate-900">Appointment Request Sent!</h3>
                    <p className="text-xs text-slate-600">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. We have received your booking request for Dr. Arun Negi's Hospital.
                    </p>
                  </div>

                  {/* Booking Ticket Summary Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3 text-xs sm:text-sm">
                    <div className="font-bold text-slate-900 border-b border-slate-200 pb-2 flex justify-between items-center">
                      <span>Booking Ticket #ANH-{Math.floor(1000 + Math.random() * 9000)}</span>
                      <span className="text-[10px] bg-teal-100 text-teal-800 font-extrabold px-2 py-0.5 rounded-full">CONFIRMED</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-slate-700">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Patient Name</span>
                        <span className="font-semibold">{formData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Phone</span>
                        <span className="font-semibold">{formData.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Service</span>
                        <span className="font-semibold">{selectedServiceObj?.title || 'General Medicine'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Requested Date</span>
                        <span className="font-semibold">{formData.preferredDate || 'Earliest OPD'}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-slate-400 block text-[10px] uppercase">Hospital Address</span>
                        <span className="font-semibold">Badrinath Marg, Jhanda Chowk, Kotdwar – 246149</span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Pre-fill Button & Copy Details */}
                  <div className="space-y-2 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Send Instant Confirmation via WhatsApp</span>
                    </a>

                    <div className="flex gap-2">
                      <button
                        onClick={copyAppointmentDetails}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        {copiedSummary ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSummary ? 'Details Copied!' : 'Copy Summary'}</span>
                      </button>

                      <button
                        onClick={() => setBookingConfirmed(false)}
                        className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                      >
                        Book Another
                      </button>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
