import aboutProject from "@assets/home/aboutProject.png";
import aboutProject2 from "@assets/home/aboutProject2.png";

const AboutProject = () => {
  return (
    <div className="bg-primary-800 w-full md:w-[50%] rounded-[50px] grow p-12 flex flex-col justify-center ">
      <div className="w-full mb-2 flex justify-center p-[4rem]">
        <img src={aboutProject2} alt="about tricksfor" />
      </div>
      <h2 className="text-[36px] font-bold mb-4 md:mb-0 text-center md:text-left">
        About project
      </h2>
      <p className="text-[20px] text-center md:text-left">
      The developer team has recently launched an innovative game application that integrates cryptocurrency payments based on predictions across various games. This blockchain-based platform ensures full transparency, allowing players to engage in a secure and fair gaming environment.
      </p>
    </div>
  );
};

export default AboutProject;
