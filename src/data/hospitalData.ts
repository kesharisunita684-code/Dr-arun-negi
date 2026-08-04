import { HospitalService, Testimonial, GalleryItem, WhyChooseItem, HealthPackage, FAQItem } from '../types';

import heroBannerImg from '../assets/images/hero_hospital_banner_1785841498744.jpg';
import doctorConsultationImg from '../assets/images/doctor_consultation_1785841513656.jpg';
import hospitalReceptionImg from '../assets/images/hospital_reception_1785841528520.jpg';
import medicalEquipmentImg from '../assets/images/medical_equipment_1785841543001.jpg';

export const HOSPITAL_INFO = {
  name: "Dr. Arun Negi's Hospital",
  doctorName: "Dr. Arun Negi",
  doctorDegree: "MBBS, MD (General Medicine)",
  tagline: "Trusted Healthcare for You & Your Family",
  address: "Badrinath Marg, Jhanda Chowk, Kotdwar, Uttarakhand – 246149, India",
  googleRating: 5.0,
  reviewsCount: 1285,
  phone: "+91 73009 65505",
  rawPhone: "917300965505",
  email: "contact@drarunnegihospital.com",
  emergencyPhone: "+91 73009 65505",
  whatsappNumber: "917300965505",
  openingHours: {
    emergency: "24 Hours / 7 Days",
    opdMonSat: "09:00 AM - 08:00 PM",
    opdSun: "09:00 AM - 02:00 PM"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13854.819385038318!2d78.5201!3d29.7478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a33c2a939029d%3A0x8e833f4439c36ec3!2sJhanda%20Chowk%2C%20Kotdwar%2C%20Uttarakhand%20246149!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  images: {
    heroBanner: heroBannerImg,
    doctorConsultation: doctorConsultationImg,
    reception: hospitalReceptionImg,
    equipment: medicalEquipmentImg
  }
};

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'experienced-doctors',
    title: 'Experienced Doctors',
    description: 'Led by Dr. Arun Negi with years of clinical expertise treating complex health issues with personalized, empathetic care.',
    iconName: 'Stethoscope',
    highlight: 'Over 15+ Years Experience'
  },
  {
    id: 'modern-equipment',
    title: 'Modern Medical Equipment',
    description: 'Equipped with state-of-the-art diagnostic machines, digital pathology, ECG, and modern therapeutic technology.',
    iconName: 'Activity',
    highlight: 'Advanced Diagnostics'
  },
  {
    id: 'patient-centered-care',
    title: 'Patient-Centered Care',
    description: 'We prioritize patient safety, clear communication, comfort, and dignified holistic treatment plans.',
    iconName: 'HeartHandshake',
    highlight: 'Compassionate Staff'
  },
  {
    id: 'affordable-treatment',
    title: 'Affordable Treatment',
    description: 'High-quality medical care at transparent, fair, and affordable costs for every family in Kotdwar and surrounding areas.',
    iconName: 'IndianRupee',
    highlight: 'Fair & Transparent Pricing'
  },
  {
    id: 'emergency-support',
    title: '24/7 Emergency Support',
    description: 'Round-the-clock medical response team ready to handle acute illnesses, trauma care, and critical situations.',
    iconName: 'Ambulance',
    highlight: 'Immediate Response Team'
  },
  {
    id: 'clean-environment',
    title: 'Clean & Hygienic Environment',
    description: 'Strict sanitization, infection control protocols, sterile consultation chambers, and comfortable waiting spaces.',
    iconName: 'ShieldCheck',
    highlight: '100% Sanitized Premises'
  },
  {
    id: 'quick-appointments',
    title: 'Quick Appointments',
    description: 'Minimal waiting time with streamlined digital and walk-in appointment scheduling for maximum convenience.',
    iconName: 'Clock',
    highlight: 'Zero Unnecessary Wait'
  },
  {
    id: 'trusted-patients',
    title: 'Trusted by Thousands',
    description: 'Consistently rated 5.0/5 stars on Google with over 1,285 satisfied patient reviews across Pauri Garhwal.',
    iconName: 'Award',
    highlight: '1,285+ 5-Star Google Reviews'
  }
];

export const SERVICES: HospitalService[] = [
  {
    id: 'general-medicine',
    title: 'General Medicine',
    category: 'primary',
    shortDesc: 'Comprehensive diagnosis and management of acute and chronic illnesses for adults and seniors.',
    fullDesc: 'Our General Medicine division provides holistic diagnostic and therapeutic management for diabetes, hypertension, respiratory infections, thyroid disorders, fever illnesses, and gastrointestinal issues under expert medical guidance.',
    iconName: 'UserCheck',
    keyFeatures: ['Chronic Disease Management', 'Fever & Infection Treatment', 'Lifestyle Medicine Advice', 'Geriatric Care'],
    timing: 'Mon-Sat: 09:00 AM - 08:00 PM',
    doctorInCharge: 'Dr. Arun Negi (MD)'
  },
  {
    id: 'physician-consultation',
    title: 'Physician Consultation',
    category: 'primary',
    shortDesc: 'One-on-one expert medical consultations with thorough physical examinations and tailored treatments.',
    fullDesc: 'Get dedicated time with Dr. Arun Negi for detailed symptom evaluation, medical history review, precise diagnosis, and evidence-based treatment regimens designed specifically for your body.',
    iconName: 'Stethoscope',
    keyFeatures: ['Detailed Physical Exam', 'Personalized Prescription', 'Follow-up Monitoring', 'Preventive Counseling'],
    timing: 'Mon-Sat: 09:00 AM - 08:00 PM',
    doctorInCharge: 'Dr. Arun Negi (MD)'
  },
  {
    id: 'health-checkups',
    title: 'Health Checkups',
    category: 'diagnostic',
    shortDesc: 'Customized full-body preventive health checkup packages for early disease detection and wellness.',
    fullDesc: 'Comprehensive health screening panels including blood counts, lipid profiles, blood sugar, kidney function, liver function, thyroid profiles, and ECG to detect health risks before symptoms appear.',
    iconName: 'FileText',
    keyFeatures: ['Full Body Blood Panel', 'ECG & Cardiac Screening', 'Comprehensive Doctor Report', 'Dietary Guidance'],
    timing: 'Mon-Sat: 08:00 AM - 04:00 PM',
    doctorInCharge: 'Pathology & Medical Team'
  },
  {
    id: 'emergency-care',
    title: 'Emergency Care',
    category: 'emergency',
    shortDesc: '24/7 immediate trauma, acute sickness, and critical emergency medical stabilization services.',
    fullDesc: 'Our emergency ward operates 24 hours a day with trained nursing staff and emergency physician coverage for acute chest pain, severe breathlessness, high fever spikes, minor injuries, and poisoning cases.',
    iconName: 'ShieldAlert',
    keyFeatures: ['24/7 Availability', 'Immediate Triage', 'Oxygen & Nebulization Support', 'Critical Stabilization'],
    timing: '24/7 Open',
    doctorInCharge: 'Emergency Medical Officer'
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics & Pathology',
    category: 'diagnostic',
    shortDesc: 'Accurate pathology laboratory tests, digital ECG, blood analysis, and diagnostic screenings.',
    fullDesc: 'State-of-the-art laboratory testing using auto-analyzers for accurate and fast reporting. Includes complete blood counts, HbA1c, urine analysis, serology, and digital electrocardiograms.',
    iconName: 'Microscope',
    keyFeatures: ['Fast turnaround times', 'Barcoded sample tracking', 'Digital reports on WhatsApp', 'Home collection support'],
    timing: 'Mon-Sat: 08:00 AM - 06:00 PM',
    doctorInCharge: 'Senior Lab Technologist'
  },
  {
    id: 'preventive-healthcare',
    title: 'Preventive Healthcare',
    category: 'primary',
    shortDesc: 'Proactive wellness, immunity boosters, cardiovascular risk management, and health counseling.',
    fullDesc: 'Empowering patients to lead healthy lives through routine monitoring, risk stratification for heart disease and stroke, nutritional advice, stress management, and early lifestyle interventions.',
    iconName: 'Heart',
    keyFeatures: ['Hypertension & Diabetes Risk Assessment', 'Weight Management', 'Immunity Support', 'Smoking & Alcohol Cessation Guidance'],
    timing: 'Mon-Sat: 10:00 AM - 06:00 PM',
    doctorInCharge: 'Dr. Arun Negi (MD)'
  },
  {
    id: 'vaccination',
    title: 'Vaccination Services',
    category: 'specialty',
    shortDesc: 'Adult and seasonal immunization services including Flu, Hepatitis, Pneumonia, and Typhoid vaccines.',
    fullDesc: 'Safe, temperature-controlled vaccine administration for adult immunizations, travel vaccines, flu shots, tetanus boosters, and routine immunizations in a sterile clinical setup.',
    iconName: 'Syringe',
    keyFeatures: ['Cold-chain certified storage', 'Adult & Senior Vaccines', 'Travel Immunizations', 'Vaccine Certificates'],
    timing: 'Mon-Sat: 09:00 AM - 05:00 PM',
    doctorInCharge: 'Clinical Nursing Staff'
  },
  {
    id: 'opd-services',
    title: 'OPD Services',
    category: 'primary',
    shortDesc: 'Outpatient consultation, dressing, minor procedures, IV fluids, and medication administration.',
    fullDesc: 'Fully functional outpatient department offering comfortable waiting lounges, dressing rooms for wound care, minor surgical procedures, IV infusion setups, and prescription renewals.',
    iconName: 'Building2',
    keyFeatures: ['Sterile Wound Dressing', 'IV Hydration & Injections', 'Blood Pressure & Glucose Checks', 'Medication Refills'],
    timing: 'Mon-Sat: 09:00 AM - 08:00 PM',
    doctorInCharge: 'Dr. Arun Negi & Medical Assistants'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Rajesh Sharma',
    location: 'Jhanda Chowk, Kotdwar',
    rating: 5,
    date: '2 weeks ago',
    treatment: 'General Physician Consultation',
    comment: 'Dr. Arun Negi is the most soft-spoken and accurate doctor in Kotdwar. I was suffering from persistent high fever for 5 days. He diagnosed my typhoid quickly, prescribed minimal medications, and I recovered within 3 days. Hospital staff is extremely polite and clean!',
    verified: true,
    avatarBg: 'bg-blue-600'
  },
  {
    id: 'rev-2',
    author: 'Pooja Rawat',
    location: 'Badrinath Marg, Kotdwar',
    rating: 5,
    date: '1 month ago',
    treatment: 'Diabetes & Hypertension Management',
    comment: 'Best medical care in Pauri Garhwal region. Dr. Negi spent 20 minutes explaining my diabetic diet and medication schedule. The clinic is very neat and hygienic. Highly recommended for families in Kotdwar!',
    verified: true,
    avatarBg: 'bg-teal-600'
  },
  {
    id: 'rev-3',
    author: 'Sunil Kumar Joshi',
    location: 'Station Road, Kotdwar',
    rating: 5,
    date: '1 month ago',
    treatment: '24/7 Emergency Care',
    comment: 'Brought my elderly mother to Dr. Arun Negi’s Hospital late at night due to severe breathing difficulty. The emergency staff acted instantly with oxygen support and proper treatment. Dr. Negi himself arrived immediately. Saved my mother’s life!',
    verified: true,
    avatarBg: 'bg-indigo-600'
  },
  {
    id: 'rev-4',
    author: 'Anita Devi',
    location: 'Haldukhata, Kotdwar',
    rating: 5,
    date: '2 months ago',
    treatment: 'Full Body Health Checkup',
    comment: 'Got my routine health package done here. Very reasonable charges and fast report generation. All test reports were sent directly to my phone on WhatsApp. Extremely convenient!',
    verified: true,
    avatarBg: 'bg-emerald-600'
  },
  {
    id: 'rev-5',
    author: 'Virendra Singh Bisht',
    location: 'Dogadda, Uttarakhand',
    rating: 5,
    date: '3 months ago',
    treatment: 'Physician Consultation & OPD',
    comment: 'Traveled from Dogadda specifically for Dr. Arun Negi. Excellent clinical judgment, no unnecessary expensive tests, and genuine patient-first care. Kotdwar is fortunate to have such a dedicated physician.',
    verified: true,
    avatarBg: 'bg-cyan-600'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hospital Building Exterior',
    category: 'Exterior',
    image: heroBannerImg,
    description: 'Modern, pristine facade located right on Badrinath Marg, Jhanda Chowk, Kotdwar.'
  },
  {
    id: 'gal-2',
    title: 'Dr. Arun Negi Consultation Chamber',
    category: 'Consultation',
    image: doctorConsultationImg,
    description: 'Spacious, comfortable private consultation room for in-depth patient discussion.'
  },
  {
    id: 'gal-3',
    title: 'Reception & Patient Lounge',
    category: 'Reception',
    image: hospitalReceptionImg,
    description: 'Air-conditioned waiting lounge with helpful reception staff and quick registration desks.'
  },
  {
    id: 'gal-4',
    title: 'Modern Diagnostic Equipment',
    category: 'Equipment',
    image: medicalEquipmentImg,
    description: 'State-of-the-art pathology auto-analyzers and digital ECG diagnostics.'
  },
  {
    id: 'gal-5',
    title: 'Clean OPD & Treatment Room',
    category: 'Patient Care',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    description: 'Sterile OPD procedure beds for injections, dressings, and minor treatments.'
  },
  {
    id: 'gal-6',
    title: 'Dedicated Medical Team',
    category: 'Staff',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    description: 'Trained nursing staff and clinical support team committed to patient comfort.'
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'basic-checkup',
    name: 'Basic Wellness Check',
    tagline: 'Ideal for routine health monitoring & blood counts.',
    price: '₹799',
    originalPrice: '₹1,200',
    testsCount: 28,
    includes: [
      'Complete Blood Count (CBC)',
      'Fasting Blood Sugar',
      'Urine Routine Examination',
      'Blood Pressure & BMI Check',
      'Doctor Consultation Included'
    ],
    recommendedFor: 'Adults above 18 for yearly screening'
  },
  {
    id: 'executive-checkup',
    name: 'Executive Family Health Package',
    tagline: 'Comprehensive multi-organ checkup for total peace of mind.',
    popular: true,
    price: '₹1,899',
    originalPrice: '₹3,000',
    testsCount: 62,
    includes: [
      'Everything in Basic Package',
      'Lipid Profile (Cholesterol & Triglycerides)',
      'Kidney Function Test (KFT - Urea, Creatinine)',
      'Liver Function Test (LFT)',
      'Thyroid Profile (TSH)',
      'Digital ECG Test',
      'Detailed Physician Consultation'
    ],
    recommendedFor: 'Working professionals & adults 30+'
  },
  {
    id: 'senior-care',
    name: 'Senior Citizen Care Package',
    tagline: 'Tailored for cardiac, diabetic, and joint health in seniors.',
    price: '₹2,499',
    originalPrice: '₹3,800',
    testsCount: 75,
    includes: [
      'Full Executive Health Screen',
      'HbA1c 3-Month Diabetes Average',
      'Uric Acid & Bone Health Check',
      'Electrolyte Panel',
      'Comprehensive Cardiac Risk Assessment',
      'Priority OPD Consultation with Dr. Arun Negi'
    ],
    recommendedFor: 'Seniors above 50 years'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Where is Dr. Arun Negi's Hospital located in Kotdwar?",
    answer: "The hospital is conveniently located on Badrinath Marg, right near Jhanda Chowk in Kotdwar, Uttarakhand – 246149. It is easily accessible by car, auto, and walk from the local bus stand.",
    category: "General"
  },
  {
    question: "What are the OPD timing hours for doctor consultations?",
    answer: "Regular OPD consultations with Dr. Arun Negi run from 09:00 AM to 08:00 PM from Monday to Saturday, and 09:00 AM to 02:00 PM on Sundays. Emergency medical care is available 24/7.",
    category: "Consultation"
  },
  {
    question: "How can I book an appointment with Dr. Arun Negi?",
    answer: "You can book an appointment directly through our website form, call us at +91 73009 65505, or message us on WhatsApp for instant slot confirmation.",
    category: "Appointments"
  },
  {
    question: "Are emergency medical services available at night?",
    answer: "Yes! Dr. Arun Negi's Hospital offers 24/7 emergency care with dedicated nursing staff, oxygen support, emergency stabilization, and doctor availability for critical cases.",
    category: "Emergency"
  },
  {
    question: "Do you offer diagnostic pathology lab tests at the hospital?",
    answer: "Yes, we have an in-house laboratory facility offering comprehensive blood tests, sugar tests, lipid panels, liver/kidney function tests, and digital ECG with fast digital reports.",
    category: "Diagnostics"
  }
];
