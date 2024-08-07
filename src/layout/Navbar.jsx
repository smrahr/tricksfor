import { Link } from "react-router-dom";

const navList = [
  { id: 1, linkName: "How it works", to: "/" },
  { id: 2, linkName: "Games", to: "/" },
  { id: 3, linkName: "Roadmap", to: "/" },
  { id: 4, linkName: "About project", to: "/" },
];

const Navbar = () => {
  return (
    <div className="flex gap-[30px] text-[18px]">
      {navList.map((item) => (
        <div key={item.id}>
          <Link to={item.to}>{item.linkName}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
