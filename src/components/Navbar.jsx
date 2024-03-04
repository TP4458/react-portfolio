import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <header>
      <nav className="nav-wrapper">
        <Link to="/">
          <div className="home">ABOUT ME</div>
        </Link>
        <Link to="/Projects">
          <div className="projects">PROJECTS</div>
        </Link>
        <Link to="/contact">
          <div className="contact">CONTACT</div>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
