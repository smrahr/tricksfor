import aboutProject from "@assets/home/aboutProject.png";

const AboutProject = () => {
  return (
    <div className="bg-primary-800 w-full md:w-[50%] rounded-[50px] grow p-12 flex flex-col justify-center ">
      <div className="w-full mb-2 flex justify-center">
        <img src={aboutProject} alt="aboutProject" />
      </div>
      <h2 className="text-[36px] font-bold mb-4 md:mb-0 text-center md:text-left">
        About project
      </h2>
      <p className="text-[20px] text-center md:text-left">
        Experience the thrill of crypto gambling at Trickfor. Enjoy
        lightning-fast transactions, exclusive games, and generous bonuses. Dive
        into a world of endless
      </p>
    </div>
  );
};

export default AboutProject;
