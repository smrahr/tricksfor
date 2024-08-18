import HeadsOrTailsIntroIMG from "@assets/games/HeadsOrTailsIntro.jpg";
import HeadsOrTailsIntroMobIMG from "@assets/games/HeadsOrTailsIntroMob.jpg";

const HeadsOrTailsIntro = () => {
  return (
    <div className="pt-[158px] m-5 md:pt-[0px]">
      <h2 className="text-[36px] md:text-[40px] pl-4 md:pl-10">
        Heads or Tails
      </h2>
      <div className="p-5 flex flex-col md:flex-row items-start gap-2 md:gap-10 justify-start md:justify-between dark:bg-primary-800 rounded-bl-[50px] md:rounded-[50px]">
        <div className="pl-0 md:pl-10 w-full md:w-[48%]">
          <h3 className="text-[28px] font-bold ">About game...</h3>
          <p className="text-[14px]">
            The Heads or Tails Game on Tricksfor is an exciting online prediction
            game where players use cryptocurrency to wager on the outcome of a
            coin flip. Here’s how it works:
          </p>
          <ul className="w-full list-disc text-[14px] pl-10">
            <li>
              <p className=" font-bold">Prediction:</p>
              <p>
                Players place their predictions on whether the coin will land on heads
                or tails.
              </p>
            </li>
            <li>
              <p className=" font-bold">Crypto Payment:</p>
              <p>
                Prediction are made using various cryptocurrencies (right now MATIC is
                the only option), providing a secure and fast transaction
                process.
              </p>
            </li>
            <li>
              <p className=" font-bold">Guessing the Future:</p>
              <p>
                The game tests players’ ability to predict the coin’s landing
                side, adding an element of anticipation and strategy.
              </p>
            </li>
          </ul>
          <p className="text-[14px]">
            This game combines the thrill of prediction with the innovative use of
            cryptocurrency, offering a modern twist to the classic game of
            chance. It’s perfect for those looking to engage in some fun prediction
            while using their crypto assets.
          </p>
        </div>
        <div className="hidden md:block w-full md:w-[48%]">
          <div className="flex justify-center overflow-hidden rounded-[50px]">
            <img src={HeadsOrTailsIntroIMG} alt="HeadsOrTailsIntro" />
          </div>
        </div>
        <div className="block md:hidden w-full md:w-[48%] mt-5">
          <div className="flex justify-center overflow-hidden rounded-[50px] ">
            <img src={HeadsOrTailsIntroMobIMG} alt="HeadsOrTailsIntro" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadsOrTailsIntro;
