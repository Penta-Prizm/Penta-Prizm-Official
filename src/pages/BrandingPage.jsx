import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout.jsx';

export default function BrandingPage({ onOpenContact }) {
  const features = [
    'Brand Strategy & Market Positioning',
    'Brand Identity Development',
    'Logo Design & Modern Logo Redesign',
    'Curated Color Palette & Color Psychology',
    'Custom Typography & Font Pairing Systems',
    'Comprehensive Brand Style Guidelines (PDF & Digital)',
    'Business Cards & Executive Letterheads',
    'Social Media Branding & Grid Templates',
    'Marketing Materials, Brochures & Pitch Decks',
    'Packaging Design & Label Systems',
    'Promotional Creatives & Digital Assets',
    'Brand Communication & Tone of Voice Guidelines',
  ];

  const processSteps = [
    {
      title: 'DISCOVER & AUDIT',
      desc: 'We research your market, competitor landscape, target audience, and brand philosophy to identify distinct white-space opportunities.',
    },
    {
      title: 'POSITION & CONCEPT',
      desc: 'We establish strategic mood boards, visual metaphors, and core positioning statements before designing.',
    },
    {
      title: 'DESIGN & ITERATE',
      desc: 'Our creative team explores logo architecture, color harmonies, and typography combinations with multi-device mockups.',
    },
    {
      title: 'REFINE & SYSTEMATIZE',
      desc: 'We stress-test the chosen identity across print, packaging, digital screens, and apparel to guarantee flawless scalability.',
    },
    {
      title: 'DELIVER & EMPOWER',
      desc: 'We provide vector assets (SVG, AI, EPS, PNG), typography licenses, and comprehensive brand guidelines.',
    },
  ];

  const benefits = [
    {
      title: 'INSTANT RECOGNITION',
      desc: 'Stand out in crowded markets with a distinctive, unforgettable visual identity that commands immediate authority.',
    },
    {
      title: 'PREMIUM BRAND PERCEPTION',
      desc: 'A cohesive, polished aesthetic allows your business to command higher pricing and win client trust immediately.',
    },
    {
      title: 'LONG-TERM ASSET VALUE',
      desc: 'Build compounding brand equity with a scalable visual system that adapts as your business launches new products and services.',
    },
  ];

  const faqs = [
    {
      question: 'What is included in a complete branding package?',
      answer:
        'Our comprehensive branding package includes primary and secondary logos, favicon, curated color palette with HEX/RGB/CMYK codes, typography hierarchy, comprehensive brand guidelines manual, business cards, letterheads, social media templates, and marketing collateral vectors.',
    },
    {
      question: 'Can you redesign our existing company logo?',
      answer:
        'Yes. We specialize in modern logo redesigns—preserving the core heritage and customer recognition of your existing mark while modernizing its typography, proportions, and digital scalability.',
    },
    {
      question: 'How long does a brand identity project take?',
      answer:
        'A full brand identity system typically takes 3 to 5 weeks from initial discovery and research to final vector asset delivery and brand book creation.',
    },
    {
      question: 'Do you provide print-ready packaging and business cards?',
      answer:
        'Absolutely. All print collateral is delivered with accurate bleed lines, die-cuts, color profiles (CMYK/Pantone), and vendor-ready specifications.',
    },
  ];

  return (
    <ServicePageLayout
      serviceId="branding"
      serviceSlug="branding"
      seoTitle="Brand Identity Design & Creative Strategy"
      seoDescription="Build a memorable brand with Penta Prizm. Comprehensive brand identity, logo design, color systems, packaging, and brand guidelines for growing businesses."
      keywords="branding agency, brand identity design, logo design, brand strategy, visual identity, brand guidelines, packaging design, corporate branding, Kochi, Kerala"
      badgeText="BRAND STRATEGY & IDENTITY"
      h1Title="Build a Brand People Remember"
      subtitle="Your brand is more than a logo. We create complete visual identities that communicate who you are, what you stand for, and how people remember you."
      description="In an era of endless digital noise, generic aesthetics are invisible. Penta Prizm combines strategic positioning, avant-garde design sensibilities, and rigorous design tokens to engineer brands that cut through the competition. Whether you are launching a transformative startup or revitalizing an established enterprise, our branding systems establish instant credibility and emotional resonance across every customer touchpoint."
      features={features}
      processSteps={processSteps}
      benefits={benefits}
      faqs={faqs}
      relatedServiceIds={['creative-content', 'website-development', 'digital-marketing']}
      onOpenContact={onOpenContact}
      heroImage="/web1.webp"
    />
  );
}
