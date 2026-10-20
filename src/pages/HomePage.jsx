import React from 'react';
import Hero from '../components/Hero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import WhatWeDo from '../components/WhatWeDo.jsx';
import PortfolioLookbook from '../components/PortfolioLookbook.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import InteractiveCustomForm from '../components/InteractiveCustomForm.jsx';
import SEOHead from '../seo/SEOHead.jsx';
import { getWebSiteSchema, getOrganizationSchema, getBreadcrumbSchema } from '../seo/schemaData.js';

export default function HomePage({
  onOpenContact,
  onSelectService,
  onOpenCustomWithItem,
  isLoaded,
  preselectedCustomItem,
  onFormSuccess,
  onModelProgress,
  onModelReady,
  onModelError,
}) {
  const schemas = [
    getOrganizationSchema(),
    getWebSiteSchema(),
  ];

  return (
    <>
      <SEOHead
        title="Penta Prizm | Official Website | Branding, Tech & Digital Studio"
        description="Official website of Penta Prizm. We are a creative and technology-driven studio in Kochi, Kerala specializing in branding, content creation, 4K video production, web development, app development, and digital marketing."
        canonicalUrl="/"
        keywords="Penta Prizm, Penta Prizm Official, PENTA PRIZM, pentaprizm, pentaprizm.in, Penta-Prizm, Penta Prizm Kochi, Penta Prizm Kerala, branding agency Kochi, video production Kerala, web development Kochi, digital marketing agency Kochi"
        schemas={schemas}
      />

      <main className="flex-1 flex flex-col w-full" id="main-content">
        {/* 1. Hero */}
        <Hero
          onOpenContact={() => onOpenContact()}
          isLoaded={isLoaded}
          onModelProgress={onModelProgress}
          onModelReady={onModelReady}
          onModelError={onModelError}
        />

        {/* 2. About Studio */}
        <AboutSection />

        {/* 3. What We Do */}
        <WhatWeDo onSelectService={onSelectService} />

        {/* 4. Lookbook & Works */}
        <PortfolioLookbook onOpenCustom={onOpenCustomWithItem} />

        {/* 5. Process */}
        <ProcessSection onStartCustom={() => onOpenCustomWithItem(null)} />

        {/* 6. Interactive Form */}
        <InteractiveCustomForm
          preselectedItem={preselectedCustomItem}
          onCompleted={() => {}}
          onSuccess={onFormSuccess}
        />
      </main>
    </>
  );
}
