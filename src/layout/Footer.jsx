import logoMobile from "@assets/header/logoMobile.png";

const Footer = () => {
  return (
    <div className=" md:block">
      <div className="bg-primary-800 w-full rounded-[50px] grow p-12 flex flex-col justify-center">
        <div>
          <img src={logoMobile} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
