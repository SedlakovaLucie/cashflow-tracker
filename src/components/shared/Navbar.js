import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <NavLink to="/" >Logo</NavLink>
    </div>
  )
}

export default Navbar