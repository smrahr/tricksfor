import { Link } from "react-router-dom";

const EachGameSection = ({ game }) => {
  var linkPath = "games";
  if(game.title.toLowerCase() != "games")
    linkPath += "/" + game.title.toLowerCase();
  return (
    <div className="w-full rouded-md py-3 relative">
      <div>
        <img src={game.image} alt="gameImage" className="w-[100%]" />
      </div>
      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <h2 className="text-[20px] font-bold">{game.title}</h2>
          <p className="text-[20px]">{game.description}</p>
          <p className="text-[20px]">{game.description}</p>
          <button className="border-4 border-white rounded-full w-[140px] h-[40px] justify-center items-center mt-[18px]">
            <Link target="_blank" to={linkPath}>
              <p className="text-[13px]">learn more</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default EachGameSection;
