import NavBar from "./NavBar";
import Title from "./Title";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <Title />
      <NavBar />
    </div>
  );
};

export default Header;