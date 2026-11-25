import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout.jsx';

export default function VideoProductionPage({ onOpenContact }) {
  const features = [
    'Corporate Overview & Brand Story Films',
    'Product Launch & Showcase Videos',
    'Commercial Advertisement Films for TV & Web',
    'Explainer & Animated 2D/3D Motion Videos',
    'High-Energy Social Media Commercials & Reels',
    'Customer Testimonials & Case Study Interviews',
    'Event Highlights & Conference Filming',
    'Professional Cameramen & Lighting Technicians',
    'Precision Video Editing & Narrative Pacing',
    'Motion Graphics & 3D Title Sequences',
    'Surround Sound Design, Foley & Dialogue Mixing',
    'DaVinci Resolve HDR Color Grading & Mastering',
  ];

  const processSteps = [
    {
      title: 'DISCOVERY & SCRIPTWRITING',
      desc: 'We define the core message, target audience emotional response, and develop detailed shot-by-shot storyboards and scripts.',
    },
    {
      title: 'PRE-PRODUCTION & CASTING',
      desc: 'Location scouting, casting, equipment staging, and filming scheduling with our dedicated production managers.',
    },
    {
      title: 'CINEMATIC FILMING',
      desc: 'Our camera operators and directors capture high-resolution 4K/6K footage with calibrated lighting and crisp multi-channel audio.',
    },
    {
      title: 'POST-PRODUCTION & VFX',
      desc: 'Rough cuts, precision trimming, VFX, motion titles, sound scoring, and director approvals.',
    },
    {
      title: 'COLOR GRADING & MASTERING',
      desc: 'Colorists grade each scene in DaVinci Resolve for mood, contrast, and skin tone perfection before exporting multi-platform masters.',
    },
  ];

  const benefits = [
    {
      title: 'UNMATCHED STORYTELLING IMPACT',
      desc: 'Video connects on an emotional level that text and static images cannot match, building instant trust and authority.',
    },
    {
      title: 'MULTI-PLATFORM UTILITY',
      desc: 'A single production day yields multiple assets: website hero videos, paid advertising cuts, social reels, and internal presentations.',
    },
    {
      title: 'EXECUTIVE QUALITY STANDARDS',
      desc: 'Cinema-grade lighting, crystal-clear audio, and broadcast-ready color grading position your company at the pinnacle of your industry.',
    },
  ];

  const faqs = [
    {
      question: 'How much does a corporate video production cost?',
      answer:
        'Video production costs depend on factors such as shoot duration, locations, motion graphics complexity, and talent requirements. We provide transparent, itemized proposals tailored to your specific scope and budget.',
    },
    {
      question: 'What is the standard turnaround time for a finished video?',
      answer:
        'Most corporate and commercial video projects take between 2 to 4 weeks from scripting to final color-graded delivery.',
    },
    {
      question: 'Do you provide voiceovers and music licensing?',
      answer:
        'Yes. We handle professional voiceover casting across multiple languages (English, Malayalam, Hindi, etc.) and license full commercial broadcast rights for all soundtrack music.',
    },
  ];

  return (
    <ServicePageLayout
      serviceId="creative-content"
      serviceSlug="video-production"
      seoTitle="Corporate & Commercial Video Production Agency"
      seoDescription="Full-service video production agency by Penta Prizm. 4K corporate videos, product commercials, brand films, and motion graphics in Kochi, Kerala."
      keywords="video production company, corporate video production, commercial video agency, brand films, product video shoot, video editing services, motion graphics, Kochi, Kerala"
      badgeText="VIDEO PRODUCTION & CINEMATOGRAPHY"
      h1Title="Cinematic Video Production & High-Impact Brand Films"
      subtitle="From high-concept commercials to corporate overviews and dynamic social reels, our cameramen, editors, and directors craft visual stories that leave a permanent impression."
      description="Video is the most powerful medium to capture attention, communicate complex value propositions, and inspire action. Penta Prizm provides end-to-end video production services—overseeing every phase from creative ideation and cinematography to advanced sound design and color grading. We engineer films that look stunning on 4K displays and convert viewers across digital marketing channels."
      features={features}
      processSteps={processSteps}
      benefits={benefits}
      faqs={faqs}
      relatedServiceIds={['creative-content', 'branding', 'digital-marketing']}
      onOpenContact={onOpenContact}
      heroImage="/web3.webp"
    />
  );
}
