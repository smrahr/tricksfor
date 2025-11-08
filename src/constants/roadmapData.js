import { FaArrowDown, FaPlay, FaRocket, FaPlaneDeparture } from "react-icons/fa6";

// Theme/Status types for styling
export const ROADMAP_STATUS = {
  COMPLETED: "completed", // Green - rgb(13, 107, 3)
  IN_PROGRESS: "in-progress", // Medium green - rgb(109, 148, 111)
  FUTURE: "future", // Muted - rgb(113, 117, 91)
};

// Style configurations for each status
export const ROADMAP_STYLES = {
  [ROADMAP_STATUS.COMPLETED]: {
    iconStyle: { background: "rgb(13, 107, 3)", color: "#fff" },
    borderColor: "rgb(109, 148, 111)",
  },
  [ROADMAP_STATUS.IN_PROGRESS]: {
    iconStyle: { background: "rgb(109, 148, 111)", color: "#fff" },
    borderColor: "rgb(109, 148, 111)",
  },
  [ROADMAP_STATUS.FUTURE]: {
    iconStyle: { background: "rgb(113, 117, 91)", color: "#fff" },
    borderColor: "rgb(113, 117, 91)",
  },
};

// Common content styles
export const CONTENT_STYLE = {
  background: "rgba(var(--color-primary-800))",
  boxShadow: "none",
  borderRadius: "5px",
};

export const CONTENT_ARROW_STYLE = {
  borderRight: "7px solid rgba(var(--color-primary-800))",
};

// Roadmap data - Update this array to modify roadmap items
export const roadmapData = [
  {
    id: 1,
    date: "December 2024 - Now",
    title: "Launch",
    description:
      "Platform launched with three classic games (Rock Paper Scissors, Heads or Tails, Dice) on Polygon network with MATIC support.",
    status: ROADMAP_STATUS.COMPLETED,
    icon: FaPlay,
    className: "vertical-timeline-element--work",
    // Override for first element
    contentArrowStyle: { borderRight: "7px solid white" },
  },
  {
    id: 2,
    date: "January 2025",
    title: "NFT Boosters",
    description:
      "Launch exclusive NFT collections on OpenSea! Stake NFTs directly from your wallet to multiply your game rewards. Win bigger with 2x, 3x, 5x, and even 10x multipliers!",
    status: ROADMAP_STATUS.IN_PROGRESS,
    icon: FaRocket,
    className: "vertical-timeline-element--work",
  },
  {
    id: 3,
    date: "Feature",
    title: "High Stakes Mode",
    description:
      "For serious players only! New high-roller games with 10x minimum bets and massive reward pools. Higher risk, bigger thrills, legendary payouts!",
    status: ROADMAP_STATUS.FUTURE,
    icon: FaPlaneDeparture,
    className: "vertical-timeline-element--work",
    titleStyle: "text-[20px] font-bold",
    descriptionStyle: "text-[15px]",
  },
  {
    id: 4,
    date: "Feature",
    title: "RPS Fire Mode",
    description: "An intense, fast-paced Rock Paper Scissors variant with rapid rounds and escalating stakes!",
    status: ROADMAP_STATUS.FUTURE,
    icon: FaPlaneDeparture,
    className: "vertical-timeline-element--work",
    titleStyle: "text-[20px] font-bold",
    descriptionStyle: "text-[15px]",
  },
  {
    id: 5,
    date: "February 2025",
    title: "Multi-Chain Expansion",
    description:
      "Play across multiple blockchains! Expanding to Optimism, Arbitrum, BSC, and Avalanche. Plus, bet with popular tokens like USDC and USDT. More chains, more options, more wins!",
    status: ROADMAP_STATUS.IN_PROGRESS,
    icon: FaRocket,
    className: "vertical-timeline-element--work",
  },
  {
    id: 6,
    date: "Feature",
    title: "Tournaments",
    description: "Compete in exclusive tournaments for top players and tournament NFT holders. Prove your skills and win massive prizes!",
    status: ROADMAP_STATUS.FUTURE,
    icon: FaPlaneDeparture,
    className: "vertical-timeline-element--work",
    titleStyle: "text-[20px] font-bold",
    descriptionStyle: "text-[15px]",
  },
  {
    id: 7,
    date: "April 2025",
    title: "Telegram Integration",
    description: "Play all your favorite games directly in Telegram on the TON blockchain. Gaming made social and accessible!",
    status: ROADMAP_STATUS.IN_PROGRESS,
    icon: FaRocket,
    className: "vertical-timeline-element--work",
  },
  {
    id: 8,
    date: "Feature",
    title: "New Casino Game",
    description: "A brand new game is coming! Roulette is the top contender, but who knows what surprises await...",
    status: ROADMAP_STATUS.FUTURE,
    icon: FaRocket,
    className: "vertical-timeline-element--work",
    titleStyle: "text-[20px] font-bold",
    descriptionStyle: "text-[15px]",
  },
  {
    id: 9,
    date: "June 2025",
    title: "Strategic Campaign Game",
    description:
      "An epic multi-phase strategic game experience! Each campaign runs 60-90 days with evolving gameplay and growing rewards.",
    status: ROADMAP_STATUS.IN_PROGRESS,
    icon: FaRocket,
    className: "vertical-timeline-element--education",
  },
  {
    id: 10,
    date: "September 2025",
    title: "TricksFor Token Launch",
    description: "Launch of the official TricksFor token ($TRICKS) during the final phase of our strategic game. Join the revolution!",
    status: ROADMAP_STATUS.IN_PROGRESS,
    icon: FaRocket,
    className: "vertical-timeline-element--education",
  },
];

// Get a subset of roadmap items for preview (e.g., homepage)
export const getPreviewRoadmap = (count = 4) => {
  return roadmapData.slice(0, count);
};

// End marker for timeline
export const timelineEndMarker = {
  icon: FaArrowDown,
  iconStyle: { background: "rgb(13, 107, 3)", color: "#fff" },
};
