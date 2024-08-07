import Header from "./Header";

const Dashbord = ({ children }) => {
  return (
    <div className="container max-w-[1152px]">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Dashbord;
