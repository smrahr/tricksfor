import Footer from "./Footer";
import Header from "./Header";

const Dashbord = ({ children, goToHowToWork }) => {
  return (
    <div className="pb-[72px]">
      <div className="container max-w-[1152px]">
        <Header goToHowToWork={goToHowToWork} />
      </div>
      <div>{children}</div>
      <div className="container max-w-[1152px]">
        <Footer />
      </div>
    </div>
  );
};

export default Dashbord;
