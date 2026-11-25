import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout.jsx';

export default function DigitalMarketingPage({ onOpenContact }) {
  const features = [
    'Social Media Management (Instagram, Facebook, LinkedIn, YouTube)',
    'High-Conversion Meta Ads (Instagram & Facebook Paid Campaigns)',
    'Google Search, Display & Performance Max (PPC) Advertising',
    'Technical Search Engine Optimization (On-Page, Off-Page & Schema SEO)',
    'High-Impact Reels, TikTok & Short-Form Video Content Production',
    'Monthly Content Calendars, Creative Post Design & Copywriting',
    'High-Intent Inbound Lead Generation & Conversion Funnels',
    'Influencer Marketing & Brand Ambassador Partnerships',
    'Audience Retargeting & Server-Side Tracking (Meta CAPI / GA4)',
    'Search Engine Marketing (SEM) & Keyword Intent Bidding',
    'Online Reputation Management & Review Optimization',
    'Real-Time Live Analytics Dashboards & Conversion Rate Optimization (CRO)',
  ];

  const processSteps = [
    {
      title: 'AUDIT & OPPORTUNITY DISCOVERY',
      desc: 'We inspect your current social footprint, website traffic, pixel tracking, and competitor ad strategies to uncover immediate growth levers.',
    },
    {
      title: 'FULL-FUNNEL ARCHITECTURE',
      desc: 'We architect Top-of-Funnel (awareness), Middle-of-Funnel (consideration), and Bottom-of-Funnel (conversion) campaign blueprints.',
    },
    {
      title: 'CREATIVE PRODUCTION & COPY',
      desc: 'Our in-house team creates thumb-stopping ad visuals, high-converting video hooks, persuasive captions, and frictionless landing pages.',
    },
    {
      title: 'CAMPAIGN LAUNCH & PIXEL TRACKING',
      desc: 'We launch precision-targeted campaigns on Google and Meta Ads, configured with server-side Conversion APIs (CAPI) and GA4 event tracking.',
    },
    {
      title: 'DAILY MONITORING & AGGRESSIVE SCALING',
      desc: 'We monitor ad spend efficiency daily—killing underperforming creatives and doubling down on winning segments to maximize ROAS.',
    },
  ];

  const benefits = [
    {
      title: 'MAXIMIZED RETURN ON AD SPEND (ROAS)',
      desc: 'Data-driven audience segmentation and continuous creative testing ensure your ad budget delivers maximum revenue return.',
    },
    {
      title: 'ORGANIC SEARCH DOMINANCE',
      desc: 'Technical SEO and high-value content architecture secure long-term top Google rankings without paying per click.',
    },
    {
      title: 'COMPOUNDING BRAND ENGAGEMENT',
      desc: 'Active social media management and high-production reels build a loyal, engaged community that advocates for your brand.',
    },
  ];

  const faqs = [
    {
      question: 'Which platform is best for my business: Google Ads or Meta Ads?',
      answer:
        'Google Ads is ideal for capturing users who already have high buying intent (actively searching for your specific service). Meta Ads (Instagram/Facebook) is powerful for creating visual desire, building brand awareness, and targeting specific demographic and lifestyle segments. We frequently deploy a hybrid strategy for full-funnel coverage.',
    },
    {
      question: 'How do you measure digital marketing performance?',
      answer:
        'We track clear business metrics: Customer Acquisition Cost (CAC), Cost Per Lead (CPL), Click-Through Rate (CTR), Return on Ad Spend (ROAS), and organic search rank improvements via transparent real-time dashboards.',
    },
    {
      question: 'What is included in your monthly social media management?',
      answer:
        'Our monthly management covers custom content calendars, graphic design for feed posts, video reel editing, engaging copywriting, hashtag research, community engagement/DM support, and monthly performance reviews.',
    },
    {
      question: 'Do you guarantee #1 rankings on Google?',
      answer:
        'No ethical SEO agency can guarantee a #1 ranking due to search engine algorithm dynamics. However, our proven technical SEO, keyword mapping, schema integration, and high-performance site architecture consistently achieve top-page visibility for target commercial terms.',
    },
  ];

  return (
    <ServicePageLayout
      serviceId="digital-marketing"
      serviceSlug="digital-marketing"
      seoTitle="Digital Marketing Agency (Meta Ads, Google Ads & SEO)"
      seoDescription="Scale your brand with Penta Prizm: full-funnel digital marketing, social media management, Google Ads, Meta Ads, and technical SEO in Kochi, Kerala."
      keywords="digital marketing agency, social media marketing, Instagram management, Google Ads agency, Meta Ads, SEO services, performance marketing, lead generation, Kochi, Kerala"
      badgeText="PERFORMANCE DIGITAL MARKETING & SEO"
      h1Title="Make Your Brand Impossible to Ignore Across the Digital Landscape"
      subtitle="We help ambitious businesses build high-authority visibility, connect with ideal customers, generate predictable sales leads, and create compounding digital growth."
      description="In modern digital marketing, vanity metrics like impressions mean nothing without conversions. Penta Prizm operates as a growth engine for your business—combining thumb-stopping creative production with aggressive performance advertising, technical SEO, and conversion rate optimization. We transform clicks into customers and ad spend into measurable profit."
      features={features}
      processSteps={processSteps}
      benefits={benefits}
      faqs={faqs}
      relatedServiceIds={['marketing', 'website-development', 'creative-content']}
      onOpenContact={onOpenContact}
      heroImage="/web4.webp"
    />
  );
}
