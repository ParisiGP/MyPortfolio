import { Link } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";

import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to={"/"}><IoHomeOutline /></Link>
    </nav>
  )
}

export default Navbar