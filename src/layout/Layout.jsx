import Footer from "./Footer";
import Header from "./Header";

const Dashbord = ({ children }) => {
  return (
    <div className="pb-[72px]">
      <div className="container max-w-[1152px]">
        <Header />
      </div>
      <div>{children}</div>
      <div className="container max-w-[1152px]">
        <Footer />
      </div>
    </div>
  );
};

export default Dashbord;
