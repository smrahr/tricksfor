const EachGameSection = ({ game }) => {
  return (
    <div className="w-full rouded-md py-3 relative">
      <div>
        <img src={game.image} alt="gameImage" />
      </div>
      <div className="absolute top-[50%] left-[50%]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[20px] font-bold">{game.title}</h2>
          <p className="text-[20px]">{game.description}</p>
        </div>
      </div>
    </div>
  );
};
export default EachGameSection;
