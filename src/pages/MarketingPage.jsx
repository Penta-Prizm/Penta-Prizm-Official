import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout.jsx';

export default function MarketingPage({ onOpenContact }) {
  const features = [
    'Comprehensive Marketing Strategy & Market Positioning',
    'In-Depth Target Audience & Customer Persona Research',
    'Competitor Benchmarking & Gap Analysis',
    'Full-Funnel Customer Acquisition Campaigns',
    'Qualified B2B & B2C Inbound Lead Generation',
    'Product & Service Launch Campaign Planning',
    'Local & Regional Geo-Targeted Marketing (Kerala & Pan-India)',
    'Brand Awareness & Category Dominance Campaigns',
    'Content Planning & Strategic Messaging Architecture',
    'Omnichannel Marketing Orchestration & Funnels',
    'Conversion Rate Optimization (CRO) & Landing Page Testing',
    'Real-Time Performance Analysis & ROI Reporting',
  ];

  const processSteps = [
    {
      title: 'RESEARCH & AUDIT',
      desc: 'We conduct deep qualitative and quantitative market analysis to identify who your customers are and where your competitors are failing.',
    },
    {
      title: 'STRATEGY & CHANNEL MAPPING',
      desc: 'We formulate the strategic game plan—defining unique value propositions, core campaign themes, and optimal marketing channels.',
    },
    {
      title: 'CREATIVE & MESSAGING',
      desc: 'Our copywriters and designers produce persuasive campaign creatives, ad hooks, and high-converting landing pages.',
    },
    {
      title: 'EXECUTION & CAMPAIGN LAUNCH',
      desc: 'We roll out integrated marketing campaigns across digital, regional, and direct channels with precision tracking.',
    },
    {
      title: 'MEASUREMENT & EVOLUTION',
      desc: 'We analyze customer acquisition costs (CAC), conversion velocity, and campaign ROI, continually optimizing for maximum profitability.',
    },
  ];

  const benefits = [
    {
      title: 'PREDICTABLE CUSTOMER PIPELINE',
      desc: 'Replace guesswork and erratic sales with structured acquisition funnels that consistently deliver high-intent inquiries.',
    },
    {
      title: 'LOWER ACQUISITION COSTS',
      desc: 'Laser-focused audience targeting and sharp messaging eliminate wasted ad spend, driving down your blended CAC.',
    },
    {
      title: 'SUSTAINABLE MARKET LEADERSHIP',
      desc: 'Build long-term brand equity and customer loyalty while maintaining aggressive short-term conversion targets.',
    },
  ];

  const faqs = [
    {
      question: 'How is marketing strategy different from just running ads?',
      answer:
        'Running ads without a coherent strategy is like driving without a map. Strategic marketing defines who you are talking to, what unique problem you solve, how you are differentiated from competitors, and what psychological triggers drive your audience to purchase.',
    },
    {
      question: 'How quickly can we expect measurable marketing results?',
      answer:
        'Paid promotional campaigns can generate qualified leads within the first 7 to 14 days of launch. Comprehensive brand awareness and organic marketing strategies typically show accelerating returns over a 3 to 6-month timeline.',
    },
    {
      question: 'Do you offer localized marketing campaigns in Kerala?',
      answer:
        'Yes. We have deep expertise in local and regional marketing across Kochi, Kerala, and South India, crafting culturally resonant messaging in English and Malayalam while also executing national campaigns.',
    },
  ];

  return (
    <ServicePageLayout
      serviceId="marketing"
      serviceSlug="marketing"
      seoTitle="Marketing Strategy & Brand Growth Consultancy"
      seoDescription="Penta Prizm delivers data-driven marketing strategy, customer acquisition campaigns, and market research that drive measurable business growth."
      keywords="marketing strategy agency, customer acquisition, lead generation, market research, brand awareness campaigns, marketing consultancy, regional marketing, Kochi, Kerala"
      badgeText="MARKETING STRATEGY & GROWTH"
      h1Title="The Right Strategy. The Right Audience. Measurable Growth."
      subtitle="We combine creative thinking, deep consumer psychology, and market analytics to help ambitious businesses capture market share and build a powerful presence."
      description="Marketing is only effective when it directly moves the needle on revenue. At Penta Prizm, we build comprehensive marketing frameworks that connect every dollar spent to clear business metrics. From initial customer persona research and competitive positioning to multi-channel execution and conversion optimization, we help you acquire customers profitably and sustainably."
      features={features}
      processSteps={processSteps}
      benefits={benefits}
      faqs={faqs}
      relatedServiceIds={['digital-marketing', 'branding', 'creative-content']}
      onOpenContact={onOpenContact}
      heroImage="/web4.webp"
    />
  );
}
