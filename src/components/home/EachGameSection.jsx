import { Link } from "react-router-dom";

const EachGameSection = ({ game }) => {
  var linkPath = "games";
  if (game.description.toLowerCase() != "games")
    linkPath += "/" + game.description.toLowerCase();
  return (
    <div className="w-full py-3 relative ">
      <div className="rounded-[50px] overflow-hidden">
        <img src={game.image} alt={game.description} className="w-[100%]" />
      </div>
      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <h2 className="text-[24px] font-bold">{game.title}</h2>
          <p className="text-[24px] p-2">{game.description}</p>
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
