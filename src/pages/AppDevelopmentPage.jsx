import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout.jsx';

export default function AppDevelopmentPage({ onOpenContact }) {
  const features = [
    'Custom iOS & Android Mobile Applications (React Native / Flutter)',
    'Enterprise Web Applications & Cloud SaaS Dashboards',
    'On-Demand Service, Booking & Appointment Apps',
    'E-Commerce & Digital Marketplace Mobile Platforms',
    'Real-Time Geolocation, GPS Tracking & Map Navigation',
    'Secure User Authentication, Biometric Login (FaceID / Fingerprint)',
    'Seamless Payment Gateway Integrations (Razorpay, Stripe, UPI)',
    'Instant Push Notifications & Multi-Channel SMS Alerts',
    'Relational & Real-Time Database Architecture (PostgreSQL / MongoDB)',
    'Comprehensive Admin Management & Operations Dashboards',
    'Third-Party REST & GraphQL API Integrations',
    'App Store & Google Play Store Submission & Lifecycle Support',
  ];

  const processSteps = [
    {
      title: 'PRODUCT DISCOVERY & SCOPE',
      desc: 'We define the core feature backlog, user journeys, data schemas, and technical architecture specifications.',
    },
    {
      title: 'PROTOTYPING & UI/UX DESIGN',
      desc: 'We craft intuitive, tap-friendly interactive app prototypes with modern dark/light mode UI and fluid transitions.',
    },
    {
      title: 'FULL-STACK DEVELOPMENT',
      desc: 'We engineer frontends and cloud API backends with robust database models, security rules, and clean modular code.',
    },
    {
      title: 'QA & MULTI-DEVICE TESTING',
      desc: 'Rigorous automated and manual testing across real iOS and Android physical devices to verify performance and zero crashes.',
    },
    {
      title: 'STORE DEPLOYMENT & SCALING',
      desc: 'We guide your app through Apple App Store and Google Play reviews, configure push notification servers, and monitor analytics.',
    },
  ];

  const benefits = [
    {
      title: 'DIRECT USER ENGAGEMENT',
      desc: 'Mobile apps reside on your customers’ home screens, enabling instant push notifications and significantly higher customer retention.',
    },
    {
      title: 'AUTOMATED BUSINESS OPERATIONS',
      desc: 'Streamline booking, order processing, and customer support with centralized cloud databases and real-time admin tools.',
    },
    {
      title: 'ENTERPRISE-GRADE SECURITY',
      desc: 'End-to-end data encryption, secure token authentication, and PCI-DSS compliant payment processing protect your business data.',
    },
  ];

  const faqs = [
    {
      question: 'Do you build native or cross-platform mobile apps?',
      answer:
        'We specialize in cross-platform mobile frameworks (such as React Native) which provide 100% native performance, smoother animations, and simultaneous deployment to both iOS and Android from a single codebase—saving time and reducing long-term maintenance costs.',
    },
    {
      question: 'How do you handle App Store and Google Play submissions?',
      answer:
        'We manage the entire submission pipeline: preparing certificates, screenshots, privacy policies, compliance checklists, and guiding the app through Apple and Google review approvals.',
    },
    {
      question: 'Can you build custom admin dashboards for our team?',
      answer:
        'Yes. Every application we develop comes with a secure, responsive web-based admin dashboard where your team can manage users, track orders, view analytics, and update content in real time.',
    },
  ];

  return (
    <ServicePageLayout
      serviceId="app-development"
      serviceSlug="app-development"
      seoTitle="Mobile App Development Company (iOS & Android)"
      seoDescription="Penta Prizm engineers custom mobile applications, cloud platforms, and booking systems for iOS and Android with scalable architecture and sleek UI/UX."
      keywords="mobile app development, iOS app development, Android app development, custom application development, cross platform apps, React Native agency, SaaS dashboard, Kochi, Kerala"
      badgeText="MOBILE & CLOUD APPLICATION ENGINEERING"
      h1Title="Turn Complex Business Ideas Into High-Performance Digital Products"
      subtitle="We develop customized mobile and web applications that solve real operational bottlenecks, elevate customer experiences, and create scalable digital revenue streams."
      description="Modern businesses require agile digital tools that work flawlessly under load. Penta Prizm designs and develops scalable mobile applications and web platforms that combine intuitive user experiences with rock-solid cloud backend infrastructure. Whether you need a customer booking application, an e-commerce platform, or a private enterprise dashboard, we build products engineered to scale."
      features={features}
      processSteps={processSteps}
      benefits={benefits}
      faqs={faqs}
      relatedServiceIds={['website-development', 'branding', 'marketing']}
      onOpenContact={onOpenContact}
      heroImage="/web5.webp"
    />
  );
}
