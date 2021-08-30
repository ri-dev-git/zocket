import Zocket from "./icons/Zocket-logo.png";
import "./css/navbar.css"
import { HashLink as Link } from "react-router-hash-link"; 
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
            <Link smooth to="#home"><img src={Zocket} alt="logo" className="Zocket-logo"/></Link>
            <Link smooth to='#services'><li className="nav-contents1">Services</li></Link>
            <Link smooth to='#whyus'><li className="nav-contents2">Why Us</li></Link>
            <Link smooth to='#about'><li className="nav-contents3">About</li></Link>
            <Link smooth to='#pricing'><li className="nav-contents4">Pricing</li></Link>
            <Link smooth to='#contact'><li className="nav-contents5">Contact</li></Link>
            <Link smooth to='#getEarlyAccess'><button className="nav-button">Get Early Access</button ></Link>   
            </ul>
        </nav>
    )
}

export default Navbar
