import LogoIcon from '../Logo/LogoIcon';
import './Navbar.css';
import { Link } from "react-router-dom";


const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <LogoIcon />
      </Link>
      <ul className="navbar-links">
        {NAV_LINKS.map(link => (
          <li key={link.label}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="navbar-actions">
        <button className="btn-career">Career</button>
        <button className="btn-booknow">Book Now</button>
        <button className="btn-darkmode">&#9790;</button>
      </div>
    </nav>
  );
}

export default Navbar;