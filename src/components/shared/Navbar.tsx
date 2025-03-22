import "./Navbar.css";
import { TbArrowsDownUp } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="logo">
        <TbArrowsDownUp className="logo-icon" />
        TRACKER
      </div>
    </div>
  );
};

export default Navbar;
