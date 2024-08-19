import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaArrowDown } from "react-icons/fa6";

const RoudMap = () => {
  return (
    <div className="container max-w-[1152px]">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="9/1/2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaArrowDown />}
        >
          <h3 className="vertical-timeline-element-title">Launch</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
          <p>
            Launch with basic games (RPS, Heads or Tails, Dice) on polygon
            network
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10/1/2024"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          icon={<FaArrowDown />}
        >
          <h3 className="vertical-timeline-element-title">Boosters</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p>
            Unlock the power of Game Boosters! Purchase exclusive NFT
            collections on OpenSea, stake them directly from your wallet in our
            app, and watch your game rewards multiply. Win big with boosted
            rewards tied to your NFTs!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaArrowDown />}
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        >
          <h3 className="vertical-timeline-element-title">Big Blind Games</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4> */}
          <p>
            Get ready for an adrenaline rush! We’re launching games with a 10x
            minimum payment for players who crave higher stakes and bigger
            rewards. Dare to risk more and reap the ultimate rewards!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaArrowDown />}
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        >
          <h3 className="vertical-timeline-element-title">RPS Fire Mode</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p>Lauch Rock paper scissor fire game mode</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="12/1/2024"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaArrowDown />}
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        >
          <h3 className="vertical-timeline-element-title">
            New Chains On Games
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
          <p>
            Exciting news! We’re expanding our game offerings to new horizons.
            Soon, you’ll be able to play on chains like Optimism, Arbitrum, BSC,
            and Avalanche, and use popular ERC20 tokens like USDC and USDT. Get
            ready for a whole new level of gaming!
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaArrowDown />}
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Tornoments </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
          <p>Run tornoments for top rank players or owner of tornoment NFTs </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="3/1/2024"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaArrowDown />}
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        >
          <h3 className="vertical-timeline-element-title">Telegram Games</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4> */}
          <p>Launch current games in telegram on TON chain</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaArrowDown />}
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        >
          <h3 className="vertical-timeline-element-title">
            Rollet | XXX | YYY
          </h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
          <p>Launch new game (Rollet)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="6/1/2025"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaArrowDown />}
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        >
          <h3 className="vertical-timeline-element-title">Strategic Games</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4> */}
          <p>
            Launch strategic game containing three phases (Each phase duration
            is around 60 to 90 days)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="9/1/2025"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaArrowDown />}
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        >
          <h3 className="vertical-timeline-element-title">Tricksfor Coin</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
          <p>
            Lauch Tricksfor token (shitcoin) with phase three of strategic game
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaArrowDown />}
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4> */}
          <p>New feature / News / Campaign</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaArrowDown />}
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
          <p>Road map milestone / Step</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaArrowDown />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default RoudMap;
