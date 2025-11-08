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
      "Launch with basic games (RPS, Heads or Tails, Dice) on polygon network",
    status: ROADMAP_STATUS.COMPLETED,
    icon: FaPlay,
    className: "vertical-timeline-element--work",
    // Override for first element
    contentArrowStyle: { borderRight: "7px solid white" },
  },
  {
    id: 2,
    date: "January 2025",
    title: "Boosters",
    description:
      "Unlock the power of Game Boosters! Purchase exclusive NFT collections on OpenSea, stake them directly from your wallet in our app, and watch your game rewards multiply. Win big with boosted rewards tied to your NFTs!",
    status: ROADMAP_STATUS.IN_PROGRESS,
    icon: FaRocket,
    className: "vertical-timeline-element--work",
  },
  {
    id: 3,
    date: "Feature",
    title: "Big Blind Games",
    description:
      "Get ready for an adrenaline rush! We're launching games with a 10x minimum payment for players who crave higher stakes and bigger rewards. Dare to risk more and reap the ultimate rewards!",
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
    description: "Launch Rock paper scissor fire game mode",
    status: ROADMAP_STATUS.FUTURE,
    icon: FaPlaneDeparture,
    className: "vertical-timeline-element--work",
    titleStyle: "text-[20px] font-bold",
    descriptionStyle: "text-[15px]",
  },
  {
    id: 5,
    date: "February 2025",
    title: "New Chains On Games",
    description:
      "Exciting news! We're expanding our game offerings to new horizons. Soon, you'll be able to play on chains like Optimism, Arbitrum, BSC, and Avalanche, and use popular ERC20 tokens like USDC and USDT. Get ready for a whole new level of gaming!",
    status: ROADMAP_STATUS.IN_PROGRESS,
    icon: FaRocket,
    className: "vertical-timeline-element--work",
  },
  {
    id: 6,
    date: "Feature",
    title: "Tournaments",
    description: "Run tournaments for top rank players or owner of tournament NFTs",
    status: ROADMAP_STATUS.FUTURE,
    icon: FaPlaneDeparture,
    className: "vertical-timeline-element--work",
    titleStyle: "text-[20px] font-bold",
    descriptionStyle: "text-[15px]",
  },
  {
    id: 7,
    date: "April 2025",
    title: "Telegram Games",
    description: "Launch current games in telegram on TON chain",
    status: ROADMAP_STATUS.IN_PROGRESS,
    icon: FaRocket,
    className: "vertical-timeline-element--work",
  },
  {
    id: 8,
    date: "Feature",
    title: "New game",
    description: "Launch new game (Rollet would be the best option, who knows...)",
    status: ROADMAP_STATUS.FUTURE,
    icon: FaRocket,
    className: "vertical-timeline-element--work",
    titleStyle: "text-[20px] font-bold",
    descriptionStyle: "text-[15px]",
  },
  {
    id: 9,
    date: "June 2025",
    title: "Strategic Game",
    description:
      "Launch strategic game containing three phases (Each phase duration is around 60 to 90 days)",
    status: ROADMAP_STATUS.IN_PROGRESS,
    icon: FaRocket,
    className: "vertical-timeline-element--education",
  },
  {
    id: 10,
    date: "September 2025",
    title: "Tricksfor Coin",
    description: "Launch Tricksfor token with the third phase of strategic game",
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
