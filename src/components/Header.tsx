import { Link } from "react-router-dom";
import NordicRoseLogo from "../assets/logos/NORDIC ROSE.png";

function Header() {
  return (
    <header className="header">
      <nav className="header__navbar">
        <Link to='/'>
          <img className="header__logo" src={NordicRoseLogo} alt="nordic rose logo" />
        </Link>
        <ul className="header__navlist">
        <li className="header__navlink header__navlink--active"><Link to='/blog'>Blog</Link></li>
          <li className="header__navlink"><a href="#About">About</a></li>
          <li className="header__navlink"><a href="#Link">Link</a></li>
          <li className="header__navlink"><a href="#Projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
