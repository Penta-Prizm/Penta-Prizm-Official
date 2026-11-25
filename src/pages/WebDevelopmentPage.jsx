import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout.jsx';

export default function WebDevelopmentPage({ onOpenContact }) {
  const features = [
    'Custom Business & Corporate Websites',
    'High-Conversion Landing Pages & Campaign Funnels',
    'Modern E-Commerce Storefronts & Checkout Systems',
    'Interactive Portfolio & Creative Agency Websites',
    'Product Launch & SaaS Showcase Web Platforms',
    'Responsive & Fluid Mobile-First Layout Architecture',
    'Modern UI/UX Design & Micro-Interaction Animations',
    'Core Web Vitals Optimization (Sub-second LCP & 0 CLS)',
    'Technical On-Page SEO & Structured Schema Markup',
    'Secure HTTPS, CSRF Protection & Form Encryption',
    'Content Management Systems (CMS) & Headless Backends',
    'Website Redesign, Code Refactoring & Maintenance',
  ];

  const processSteps = [
    {
      title: 'DISCOVERY & INFORMATION ARCHITECTURE',
      desc: 'We analyze your business objectives, map out user personas, plan site architecture, and wireframe key conversion paths.',
    },
    {
      title: 'UI/UX DESIGN & PROTOTYPING',
      desc: 'We create immersive high-fidelity Figma mockups with dark/light aesthetics, custom typography, and responsive breakpoints.',
    },
    {
      title: 'CLEAN CODE ENGINEERING',
      desc: 'We develop the frontend using modern React, semantic HTML5, and responsive CSS, integrating dynamic forms and backend APIs.',
    },
    {
      title: 'PERFORMANCE & SEO AUDIT',
      desc: 'We optimize image formats (WebP/AVIF), compress bundles, configure XML sitemaps, canonicals, and test Core Web Vitals.',
    },
    {
      title: 'DEPLOYMENT & CONTINUOUS SUPPORT',
      desc: 'We launch on high-speed global CDNs with SSL certificates, automated backups, and 24/7 uptime monitoring.',
    },
  ];

  const benefits = [
    {
      title: 'SUB-SECOND PAGE LOADS',
      desc: 'Lightning-fast load times keep visitors engaged, reduce bounce rates, and directly boost search engine rankings.',
    },
    {
      title: 'CONVERSION-DRIVEN UI/UX',
      desc: 'Intuitive user journeys and friction-free inquiry forms turn passive browsers into qualified sales leads.',
    },
    {
      title: 'SCALABLE ARCHITECTURE',
      desc: 'Clean, modular code allows your website to expand effortlessly as you add new services, products, or locations.',
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to develop a custom website?',
      answer:
        'A custom business or corporate website typically takes 3 to 6 weeks from initial design wireframing to testing, SEO optimization, and live deployment.',
    },
    {
      question: 'Will our website be fully mobile responsive and SEO-friendly?',
      answer:
        'Yes. Every website we build is 100% mobile-responsive, adheres to modern accessibility guidelines, and is pre-configured with technical SEO, semantic tags, and structured data schemas.',
    },
    {
      question: 'Can you integrate our existing CRM or booking systems?',
      answer:
        'Yes. We seamlessly integrate contact forms with email systems, CRMs (HubSpot, Salesforce, Zoho), WhatsApp APIs, payment gateways, and analytics tools.',
    },
    {
      question: 'Do you provide ongoing website maintenance and security updates?',
      answer:
        'Yes. We offer dedicated website maintenance packages covering security patching, speed monitoring, content updates, and cloud hosting management.',
    },
  ];

  return (
    <ServicePageLayout
      serviceId="website-development"
      serviceSlug="web-development"
      seoTitle="Custom Web Development & UI/UX Design Company"
      seoDescription="Penta Prizm builds modern, high-performance responsive websites, corporate portals, and e-commerce platforms with cutting-edge UI/UX and technical SEO."
      keywords="web development company, custom website development, corporate website design, e-commerce development, responsive web design, UI UX design agency, website redesign, Kochi, Kerala"
      badgeText="HIGH-PERFORMANCE WEB ARCHITECTURE"
      h1Title="Your Business, Built for the Modern Digital World"
      subtitle="We create modern, responsive, and high-performance websites designed to give your business an authoritative digital presence and turn visitors into paying customers."
      description="Your website is the center of your entire digital ecosystem. At Penta Prizm, we combine state-of-the-art frontend engineering with sleek, memorable visual design. We don't rely on bloated, generic templates—we build custom, lightweight, accessible web applications that load in milliseconds and deliver measurable business conversions across every device."
      features={features}
      processSteps={processSteps}
      benefits={benefits}
      faqs={faqs}
      relatedServiceIds={['app-development', 'branding', 'digital-marketing']}
      onOpenContact={onOpenContact}
      heroImage="/web2.webp"
    />
  );
}
