import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout.jsx';

export default function ContentCreationPage({ onOpenContact }) {
  const features = [
    'Commercial Photography & Studio Product Shoots',
    'High-Definition Videography & On-Location Filming',
    'Professional Cameramen & Lighting Crews',
    'Post-Production Video Editing & Assembly',
    'Motion Graphics & Kinetic Typography Animations',
    '3D Visual Assets & Product Renders',
    'Social Media Reels & Short-Form TikTok Content',
    'Sound Design, Foley & Audio Mastering',
    'Cinematic Color Correction & DaVinci Resolve Grading',
    'Creative Ad Creatives for Paid Meta & Google Ads',
    'Event Coverage & Behind-The-Scenes Documentaries',
    'Monthly Content Production & Batch Filming Days',
  ];

  const processSteps = [
    {
      title: 'CONCEPT & SCRIPTING',
      desc: 'We brainstorm compelling visual hooks, write clear scripts, and build storyboards aligned with your brand goals.',
    },
    {
      title: 'CREW & PRODUCTION',
      desc: 'Our experienced cameramen, directors, and photographers conduct shoots using cinema-grade 4K cameras and precision lighting setups.',
    },
    {
      title: 'EDITING & PACING',
      desc: 'Our post-production video editors assemble footage with rhythm, narrative flow, and custom motion graphics.',
    },
    {
      title: 'COLOR & SOUND FINISHING',
      desc: 'We apply professional color grading and bespoke sound design to ensure cinematic polish across all speaker systems and displays.',
    },
    {
      title: 'MULTI-FORMAT DELIVERY',
      desc: 'We export master files optimized for web streaming, YouTube 4K, Instagram 9:16 reels, and paid advertising networks.',
    },
  ];

  const benefits = [
    {
      title: 'STOP-THE-SCROLL VISUALS',
      desc: 'Capture immediate user attention on crowded social feeds with cinema-quality visuals, vibrant lighting, and sharp sound design.',
    },
    {
      title: 'HIGH REEL & AD CONVERSIONS',
      desc: 'High-production visual content generates significantly higher click-through rates and customer inquiries than static images.',
    },
    {
      title: 'STREAMLINED PRODUCTION',
      desc: 'Our full in-house crew handles everything from concept to final export, eliminating the hassle of coordinating multiple freelancers.',
    },
  ];

  const faqs = [
    {
      question: 'What equipment does your production team use?',
      answer:
        'Our production crews shoot on cinema cameras (Sony FX series, RED, Blackmagic 4K/6K) paired with prime cinema lenses, wireless audio receivers, motorized gimbals, and studio lighting rigs.',
    },
    {
      question: 'Can you produce vertical videos for Instagram Reels and TikTok?',
      answer:
        'Yes! We specialize in high-conversion 9:16 short-form video production with dynamic captions, sound design, and trend-aligned pacing.',
    },
    {
      question: 'Do you provide on-location shoots outside of Kochi?',
      answer:
        'Yes, our creative team and camera crews travel across Kerala, India, and internationally for on-location corporate shoots, commercial productions, and events.',
    },
  ];

  return (
    <ServicePageLayout
      serviceId="creative-content"
      serviceSlug="content-creation"
      seoTitle="Creative Content Creation & Photography Studio"
      seoDescription="Transform your brand with professional photography, videography, motion graphics, and video editing by Penta Prizm's in-house creative team."
      keywords="content creation agency, professional photography, videography, video editing studio, motion graphics, commercial photography, reels production, Kochi, Kerala"
      badgeText="CREATIVE CONTENT & MEDIA"
      h1Title="Turn Ideas Into Captivating Visual Experiences"
      subtitle="Great ideas deserve great visuals. From concept development to the final edit, our cameramen, photographers, editors, and creative team bring your brand story to life."
      description="Visuals define how your audience perceives your quality. Penta Prizm operates as an integrated creative studio where directors, photographers, videographers, and motion designers collaborate under one roof. We produce commercial content that elevates brand perception, increases social engagement, and converts viewers into loyal customers."
      features={features}
      processSteps={processSteps}
      benefits={benefits}
      faqs={faqs}
      relatedServiceIds={['video-production', 'branding', 'digital-marketing']}
      onOpenContact={onOpenContact}
      heroImage="/web3.webp"
    />
  );
}
