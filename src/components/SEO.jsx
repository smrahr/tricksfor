import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { seoConfig, generateStructuredData, SITE_NAME, TWITTER_HANDLE } from '../constants/seoConfig';

/**
 * SEO Component - Manages meta tags, Open Graph, Twitter Cards, and structured data
 * @param {string} page - The page key from seoConfig (e.g., 'home', 'dice', 'coin')
 * @param {object} customMeta - Optional custom meta tags to override defaults
 */
const SeoHead = ({ page = 'home', customMeta = {} }) => {
  const pageSeo = seoConfig[page] || seoConfig.home;
  const structuredData = generateStructuredData(page);

  // Merge custom meta with default page SEO
  const seo = {
    ...pageSeo,
    ...customMeta,
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={seo.canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.imageAlt} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.canonical} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.imageAlt} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content={SITE_NAME} />

      {/* Theme Color */}
      <meta name="theme-color" content="#1e1b4b" />
      <meta name="msapplication-TileColor" content="#1e1b4b" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

SeoHead.propTypes = {
  page: PropTypes.oneOf(['home', 'dice', 'coin', 'rps', 'affiliate', 'transparency', 'faq', 'roadmap']).isRequired,
  customMeta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    canonical: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
  }),
};

export default SeoHead;
