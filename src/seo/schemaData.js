import { SEO_CONFIG } from './seoConfig.js';

/**
 * Generate Organization JSON-LD Schema
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    name: SEO_CONFIG.business.name,
    legalName: SEO_CONFIG.business.legalName,
    alternateName: SEO_CONFIG.alternateNames,
    url: SEO_CONFIG.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${SEO_CONFIG.siteUrl}/logo1.webp`,
      caption: 'Penta Prizm Logo',
    },
    image: `${SEO_CONFIG.siteUrl}/Hero.png`,
    description: SEO_CONFIG.defaultDescription,
    telephone: SEO_CONFIG.business.telephone,
    email: SEO_CONFIG.business.email,
    knowsAbout: [
      'Branding',
      'Brand Identity Design',
      'Creative Content Creation',
      '4K Video Production',
      'Cinematography',
      'Commercial Photography',
      'Web Development',
      'Mobile App Development',
      'UI/UX Design',
      'Performance Marketing',
      'Digital Marketing',
      'Search Engine Optimization (SEO)',
      'Meta Ads',
      'Google Ads',
    ],
    areaServed: [
      { '@type': 'City', name: 'Kochi' },
      { '@type': 'State', name: 'Kerala' },
      { '@type': 'Country', name: 'India' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_CONFIG.business.address.streetAddress,
      addressLocality: SEO_CONFIG.business.address.addressLocality,
      addressRegion: SEO_CONFIG.business.address.addressRegion,
      postalCode: SEO_CONFIG.business.address.postalCode,
      addressCountry: SEO_CONFIG.business.address.addressCountry,
    },
    sameAs: SEO_CONFIG.socialProfiles,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SEO_CONFIG.business.telephone,
        contactType: 'customer support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Malayalam', 'Hindi'],
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Penta Prizm Creative & Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Branding & Identity Design',
            url: `${SEO_CONFIG.siteUrl}/branding`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Creative Content Creation',
            url: `${SEO_CONFIG.siteUrl}/content-creation`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '4K Video Production & Brand Films',
            url: `${SEO_CONFIG.siteUrl}/video-production`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development & UI/UX',
            url: `${SEO_CONFIG.siteUrl}/web-development`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Application Engineering',
            url: `${SEO_CONFIG.siteUrl}/app-development`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Marketing Strategy & Consulting',
            url: `${SEO_CONFIG.siteUrl}/marketing`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing & Growth',
            url: `${SEO_CONFIG.siteUrl}/digital-marketing`,
          },
        },
      ],
    },
  };
}

/**
 * Generate LocalBusiness / ProfessionalService JSON-LD Schema
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SEO_CONFIG.siteUrl}/#localbusiness`,
    name: SEO_CONFIG.business.name,
    legalName: SEO_CONFIG.business.legalName,
    alternateName: SEO_CONFIG.alternateNames,
    image: `${SEO_CONFIG.siteUrl}/Hero.png`,
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.business.telephone,
    email: SEO_CONFIG.business.email,
    priceRange: SEO_CONFIG.business.priceRange,
    knowsAbout: [
      'Branding',
      'Creative Content Creation',
      'Video Production',
      'Web Development',
      'Mobile App Development',
      'Digital Marketing',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SEO_CONFIG.business.address.streetAddress,
      addressLocality: SEO_CONFIG.business.address.addressLocality,
      addressRegion: SEO_CONFIG.business.address.addressRegion,
      postalCode: SEO_CONFIG.business.address.postalCode,
      addressCountry: SEO_CONFIG.business.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SEO_CONFIG.business.geo.latitude,
      longitude: SEO_CONFIG.business.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: SEO_CONFIG.socialProfiles,
  };
}

/**
 * Generate WebSite JSON-LD Schema
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_CONFIG.siteUrl}/#website`,
    url: SEO_CONFIG.siteUrl,
    name: SEO_CONFIG.siteName,
    alternateName: SEO_CONFIG.alternateNames,
    description: SEO_CONFIG.defaultDescription,
    publisher: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SEO_CONFIG.siteUrl}/portfolio?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate BreadcrumbList JSON-LD Schema
 * @param {Array<{name: string, url: string}>} items
 */
export function getBreadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http')
        ? item.url
        : `${SEO_CONFIG.siteUrl}${item.url}`,
    })),
  };
}

/**
 * Generate Service JSON-LD Schema
 */
export function getServiceSchema({
  name,
  description,
  serviceType,
  url,
  offers = [],
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SEO_CONFIG.siteUrl}${url}#service`,
    name,
    serviceType: serviceType || name,
    description,
    provider: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: offers.length
      ? {
          '@type': 'OfferCatalog',
          name: `${name} Offerings`,
          itemListElement: offers.map((offer, idx) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: offer,
            },
          })),
        }
      : undefined,
  };
}

/**
 * Generate FAQPage JSON-LD Schema
 * @param {Array<{question: string, answer: string}>} faqs
 */
export function getFAQSchema(faqs = []) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Article / BlogPosting JSON-LD Schema
 */
export function getArticleSchema({
  title,
  description,
  url,
  publishedDate,
  modifiedDate,
  author = 'Penta Prizm Editorial',
  image = `${SEO_CONFIG.siteUrl}/Hero.png`,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SEO_CONFIG.siteUrl}${url}`,
    },
    headline: title,
    description,
    image,
    author: {
      '@type': 'Organization',
      name: author,
      url: SEO_CONFIG.siteUrl,
    },
    publisher: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    inLanguage: 'en-IN',
  };
}
