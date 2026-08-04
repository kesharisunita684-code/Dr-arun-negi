export interface HospitalService {
  id: string;
  title: string;
  category: 'primary' | 'diagnostic' | 'emergency' | 'specialty';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyFeatures: string[];
  timing?: string;
  doctorInCharge?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  treatment: string;
  comment: string;
  verified: boolean;
  avatarBg?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exterior' | 'Reception' | 'Consultation' | 'Equipment' | 'Patient Care' | 'Staff';
  image: string;
  description: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface AppointmentData {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  patientType: 'new' | 'followup' | 'emergency';
  message: string;
}

export interface HealthPackage {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  price: string;
  originalPrice?: string;
  testsCount: number;
  includes: string[];
  recommendedFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
