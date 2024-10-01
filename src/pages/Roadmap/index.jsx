import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaArrowDown } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { FaPlaneDeparture } from "react-icons/fa6";

const Roadmap = () => {
  return (
    <div className="container max-w-[1152px]">
      <div className=" pt-40 md:pt-0">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(var(--color-primary-800))",
              boxShadow: "none",
              borderTop: "15px solid rgb(109, 148, 111)",
              borderRadius: "5px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="October 2024 - Now"
            iconStyle={{ background: "rgb(13, 107, 3)", color: "#fff" }}
            icon={<FaPlay />}
          >
            <h3 className="vertical-timeline-element-title">Launch</h3>
            <p>
              Launch with basic games (RPS, Heads or Tails, Dice) on polygon
              network
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2024"
            contentStyle={{
              background: "rgba(var(--color-primary-800))",
              boxShadow: "none",
              borderTop: "15px solid rgb(109, 148, 111)",
              borderRadius: "5px",
            }}
            iconStyle={{ background: "rgb(109, 148, 111)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            icon={<FaRocket />}
          >
            <h3 className="vertical-timeline-element-title">Boosters</h3>
            <p>
              Unlock the power of Game Boosters! Purchase exclusive NFT
              collections on OpenSea, stake them directly from your wallet in
              our app, and watch your game rewards multiply. Win big with
              boosted rewards tied to your NFTs!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feature"
            iconStyle={{ background: "rgb(113, 117, 91)", color: "#fff" }}
            icon={<FaPlaneDeparture />}
            contentStyle={{
              background: "rgba(var(--color-primary-800))",
              boxShadow: "none",
              borderTop: "15px solid rgb(113, 117, 91)",
              borderRadius: "5px",
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
          >
            <h4 className="vertical-timeline-element-title text-[20px] font-bold">
              Big Blind Games
            </h4>
            <p className="text-[15px]">
              Get ready for an adrenaline rush! We’re launching games with a 10x
              minimum payment for players who crave higher stakes and bigger
              rewards. Dare to risk more and reap the ultimate rewards!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feature"
            iconStyle={{ background: "rgb(113, 117, 91)", color: "#fff" }}
            icon={<FaPlaneDeparture />}
            contentStyle={{
              background: "rgba(var(--color-primary-800))",
              boxShadow: "none",
              borderTop: "15px solid rgb(113, 117, 91)",
              borderRadius: "5px",
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
          >
            <h3 className="vertical-timeline-element-title text-[20px] font-bold">
              RPS Fire Mode
            </h3>
            <p className="text-[15px]">
              Lauch Rock paper scissor fire game mode
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2025"
            iconStyle={{ background: "rgb(109, 148, 111)", color: "#fff" }}
            icon={<FaRocket />}
            contentStyle={{
              background: "rgba(var(--color-primary-800))",
              boxShadow: "none",
              borderTop: "15px solid rgb(109, 148, 111)",
              borderRadius: "5px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
          >
            <h3 className="vertical-timeline-element-title">
              New Chains On Games
            </h3>
            <p>
              Exciting news! We’re expanding our game offerings to new horizons.
              Soon, you’ll be able to play on chains like Optimism, Arbitrum,
              BSC, and Avalanche, and use popular ERC20 tokens like USDC and
              USDT. Get ready for a whole new level of gaming!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feature"
            iconStyle={{ background: "rgb(113, 117, 91)", color: "#fff" }}
            icon={<FaPlaneDeparture />}
            contentStyle={{
              background: "rgba(var(--color-primary-800))",
              boxShadow: "none",
              borderTop: "15px solid rgb(113, 117, 91)",
              borderRadius: "5px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
          >
            <h3 className="vertical-timeline-element-title text-[20px] font-bold">
              Tornoments
            </h3>
            <p className="text-[15px]">
              Run tornoments for top rank players or owner of tornoment NFTs{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2025"
            iconStyle={{ background: "rgb(109, 148, 111)", color: "#fff" }}
            icon={<FaRocket />}
            contentStyle={{
              background: "rgba(var(--color-primary-800))",
              boxShadow: "none",
              borderTop: "15px solid rgb(109, 148, 111)",
              borderRadius: "5px",
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
          >
            <h3 className="vertical-timeline-element-title">Telegram Games</h3>
            <p>Launch current games in telegram on TON chain</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feature"
            iconStyle={{ background: "rgb(113, 117, 91)", color: "#fff" }}
            icon={<FaRocket />}
            contentStyle={{
              background: "rgba(var(--color-primary-800))",
              boxShadow: "none",
              borderTop: "15px solid rgb(113, 117, 91)",
              borderRadius: "5px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
          >
            <h3 className="vertical-timeline-element-title text-[20px] font-bold">
              New game
            </h3>
            <p className="text-[15px]">
              Launch new game (Rollet would be the best option, who knows...)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2025"
            iconStyle={{ background: "rgb(109, 148, 111)", color: "#fff" }}
            icon={<FaRocket />}
            contentStyle={{
              background: "rgba(var(--color-primary-800))",
              boxShadow: "none",
              borderTop: "15px solid rgb(109, 148, 111)",
              borderRadius: "5px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
          >
            <h3 className="vertical-timeline-element-title">Strategic Game</h3>
            <p>
              Launch strategic game containing three phases (Each phase duration
              is around 60 to 90 days)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2025"
            iconStyle={{ background: "rgb(109, 148, 111)", color: "#fff" }}
            icon={<FaRocket />}
            contentStyle={{
              background: "rgba(var(--color-primary-800))",
              boxShadow: "none",
              borderTop: "15px solid rgb(109, 148, 111)",
              borderRadius: "5px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
          >
            <h3 className="vertical-timeline-element-title">Tricksfor Coin</h3>
            <p>Lauch Tricksfor token with the third phase of strategic game</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(13, 107, 3)", color: "#fff" }}
            icon={<FaArrowDown />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Roadmap;
