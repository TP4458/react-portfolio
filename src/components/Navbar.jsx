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
          <a href="email">
            <div className="contact">CONTACT</div>
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
