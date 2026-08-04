import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { HealthPackages } from './components/HealthPackages';
import { PatientReviews } from './components/PatientReviews';
import { GallerySection } from './components/GallerySection';
import { AppointmentForm } from './components/AppointmentForm';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { SymptomCheckerModal } from './components/SymptomCheckerModal';
import { Stethoscope, Activity } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedPackageName, setSelectedPackageName] = useState<string | undefined>(undefined);
  const [isSymptomModalOpen, setIsSymptomModalOpen] = useState(false);

  // Smooth scroll handler to appointment form
  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setSelectedPackageName(undefined);
    scrollToAppointment();
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackageName(packageName);
    setSelectedServiceId('health-checkups');
    scrollToAppointment();
  };

  // Active section observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'why-us', 'services', 'packages', 'reviews', 'gallery', 'appointment', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onBookClick={scrollToAppointment} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onBookClick={scrollToAppointment} />

        {/* Quick Symptom Checker Banner Bar */}
        <div className="bg-gradient-to-r from-blue-700 via-teal-600 to-blue-800 text-white py-3.5 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
              <Activity className="w-4 h-4 text-teal-300 animate-pulse shrink-0" />
              <span>Not sure which department you need? Try our quick 10-second Symptom Guide.</span>
            </div>
            <button
              onClick={() => setIsSymptomModalOpen(true)}
              className="bg-white text-blue-900 hover:bg-teal-50 font-extrabold text-xs px-4 py-1.5 rounded-full shadow-sm transition-all shrink-0 cursor-pointer"
            >
              Check Symptoms
            </button>
          </div>
        </div>

        {/* About Hospital */}
        <AboutSection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Hospital Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Health Checkup Packages */}
        <HealthPackages onSelectPackage={handleSelectPackage} />

        {/* Patient Reviews & Google Rating */}
        <PatientReviews />

        {/* Hospital Infrastructure Gallery */}
        <GallerySection />

        {/* Interactive Appointment Form */}
        <AppointmentForm
          selectedServiceId={selectedServiceId}
          selectedPackageName={selectedPackageName}
        />

        {/* Contact & Google Maps */}
        <ContactSection />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating Action Buttons (Mobile & Desktop) */}
      <FloatingActions />

      {/* Symptom Checker Modal */}
      <SymptomCheckerModal
        isOpen={isSymptomModalOpen}
        onClose={() => setIsSymptomModalOpen(false)}
        onSelectService={handleSelectService}
      />
    </div>
  );
}
