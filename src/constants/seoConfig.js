/**
 * SEO Configuration for all pages
 * Contains meta tags, Open Graph, Twitter Cards, and structured data
 */

const SITE_URL = 'https://www.tricksfor.com';
const SITE_NAME = 'TricksFor';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`; // You'll need to add this image
const TWITTER_HANDLE = '@TricksFor'; // Update with your actual Twitter handle

export const seoConfig = {
  home: {
    title: 'TricksFor - Web3 Crypto Gaming Hub | Play Dice, Coin Flip & RPS Games',
    description: 'Play blockchain-based games with cryptocurrency. Enjoy Dice, Heads or Tails, and Rock Paper Scissors on Polygon, Arbitrum, Avalanche, BSC, and Optimism networks. Fast, secure, and provably fair gaming.',
    keywords: 'crypto gaming, blockchain games, web3 gaming, crypto casino, dice game, coin flip, rock paper scissors, polygon gaming, MATIC, play to earn, crypto gambling, provably fair, ethereum games',
    canonical: SITE_URL,
    ogType: 'website',
    image: DEFAULT_IMAGE,
    imageAlt: 'TricksFor - Crypto Gaming Platform',
  },
  dice: {
    title: 'Dice Game - Crypto Dice Rolling | TricksFor Web3 Gaming',
    description: 'Roll the dice and win crypto! Play our provably fair dice game with MATIC on Polygon network. Choose your number from 1-6 and multiply your bet. Fast transactions, low fees, high rewards.',
    keywords: 'crypto dice game, blockchain dice, dice gambling crypto, MATIC dice, polygon dice game, provably fair dice, web3 dice, cryptocurrency gambling, dice roll betting',
    canonical: `${SITE_URL}/games/dice`,
    ogType: 'website',
    image: DEFAULT_IMAGE,
    imageAlt: 'TricksFor Dice Game - Crypto Gambling',
  },
  coin: {
    title: 'Heads or Tails - Crypto Coin Flip Game | TricksFor',
    description: 'Play classic coin flip game with cryptocurrency. Bet on Heads or Tails with MATIC on Polygon network. 50/50 chance to double your crypto. Instant results, provably fair outcomes.',
    keywords: 'coin flip crypto, heads or tails game, crypto coin toss, blockchain coin flip, MATIC coin game, provably fair coin flip, web3 coin toss, cryptocurrency betting',
    canonical: `${SITE_URL}/games/coin`,
    ogType: 'website',
    image: DEFAULT_IMAGE,
    imageAlt: 'TricksFor Heads or Tails - Coin Flip Game',
  },
  rps: {
    title: 'Rock Paper Scissors - Crypto RPS Game | TricksFor',
    description: 'Play Rock Paper Scissors with cryptocurrency on blockchain. Compete against other players using MATIC. Classic game with crypto rewards. Provably fair and transparent results.',
    keywords: 'crypto rock paper scissors, blockchain RPS, web3 rock paper scissors, MATIC rps game, crypto hand game, provably fair rps, cryptocurrency gaming, polygon games',
    canonical: `${SITE_URL}/games/rps`,
    ogType: 'website',
    image: DEFAULT_IMAGE,
    imageAlt: 'TricksFor Rock Paper Scissors - Crypto Game',
  },
  affiliate: {
    title: 'Affiliate Program - Earn Crypto Commissions | TricksFor',
    description: 'Join TricksFor affiliate program and earn crypto commissions. Refer players and get rewarded with cryptocurrency. Transparent tracking, automated payouts, generous commission rates.',
    keywords: 'crypto affiliate program, blockchain gaming affiliate, web3 affiliate, crypto referral program, gaming affiliate network, cryptocurrency commissions, MATIC rewards',
    canonical: `${SITE_URL}/affiliate`,
    ogType: 'website',
    image: DEFAULT_IMAGE,
    imageAlt: 'TricksFor Affiliate Program',
  },
  transparency: {
    title: 'Transparency & Fair Play - Provably Fair Gaming | TricksFor',
    description: 'Discover how TricksFor ensures fair play with blockchain transparency. Provably fair algorithms, on-chain verification, and complete game transparency. Trust through technology.',
    keywords: 'provably fair gaming, blockchain transparency, fair crypto gaming, on-chain verification, transparent gaming, trustless casino, web3 fair play, verifiable randomness',
    canonical: `${SITE_URL}/transparency`,
    ogType: 'website',
    image: DEFAULT_IMAGE,
    imageAlt: 'TricksFor Transparency & Fair Play',
  },
  faq: {
    title: 'FAQ - Frequently Asked Questions | TricksFor Crypto Gaming',
    description: 'Get answers to common questions about TricksFor crypto gaming platform. Learn about gameplay, deposits, withdrawals, supported networks, and how our provably fair system works.',
    keywords: 'crypto gaming FAQ, blockchain gaming questions, web3 gaming help, TricksFor questions, crypto casino FAQ, how to play crypto games, MATIC gaming guide',
    canonical: `${SITE_URL}/faq`,
    ogType: 'website',
    image: DEFAULT_IMAGE,
    imageAlt: 'TricksFor FAQ',
  },
  roadmap: {
    title: 'Roadmap - Future Development Plans | TricksFor',
    description: 'Explore TricksFor development roadmap. See our upcoming features, new games, network expansions, and platform improvements. Join us on our journey to revolutionize crypto gaming.',
    keywords: 'crypto gaming roadmap, blockchain gaming development, web3 gaming future, TricksFor updates, upcoming crypto games, platform development',
    canonical: `${SITE_URL}/roadmap`,
    ogType: 'website',
    image: DEFAULT_IMAGE,
    imageAlt: 'TricksFor Roadmap',
  },
};

/**
 * Generate structured data (JSON-LD) for SEO
 */
export const generateStructuredData = (pageKey) => {
  const page = seoConfig[pageKey];
  
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: page.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  // Add Organization data for home page
  if (pageKey === 'home') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        baseData,
        {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          description: 'Web3 blockchain gaming platform with provably fair games',
          sameAs: [
            'https://twitter.com/TricksFor',
            'https://discord.gg/tricksfor',
            'https://t.me/tricksfor',
          ],
        },
        {
          '@type': 'WebApplication',
          name: SITE_NAME,
          url: SITE_URL,
          applicationCategory: 'GameApplication',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
      ],
    };
  }

  // Add Game data for game pages
  if (['dice', 'coin', 'rps'].includes(pageKey)) {
    const gameNames = {
      dice: 'Dice Game',
      coin: 'Heads or Tails',
      rps: 'Rock Paper Scissors',
    };

    return {
      '@context': 'https://schema.org',
      '@type': 'Game',
      name: gameNames[pageKey],
      description: page.description,
      url: page.canonical,
      gamePlatform: 'Web Browser',
      genre: 'Casino',
      applicationCategory: 'GameApplication',
    };
  }

  // Add FAQPage data for FAQ
  if (pageKey === 'faq') {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      name: page.title,
      description: page.description,
      url: page.canonical,
    };
  }

  return baseData;
};

export { SITE_URL, SITE_NAME, DEFAULT_IMAGE, TWITTER_HANDLE };
