import "./Navbar.css"
import { NavLink } from "react-router-dom"
import { TbArrowsDownUp } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <NavLink to="/" ><TbArrowsDownUp className="logo-icon"/>TRACKER</NavLink>
    </div>
  )
}

export default Navbar