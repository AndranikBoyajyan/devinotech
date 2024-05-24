import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="ul">
        <Link to='/aboutus'>About Us</Link>
        <Link to='/programs'>Programs</Link>
        <Link to='/news'>News</Link>
        <Link to='/resources'>Resources</Link>
        <Link to='/partners'>Partners</Link>
        <Link to='/contacts'>Contacts</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
