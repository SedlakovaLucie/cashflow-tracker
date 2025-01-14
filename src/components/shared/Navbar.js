import "./Navbar.css"
import { NavLink } from "react-router-dom"
import { TbArrowsDownUp } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <NavLink to="/" ><TbArrowsDownUp />tracker</NavLink>
    </div>
  )
}

export default Navbar