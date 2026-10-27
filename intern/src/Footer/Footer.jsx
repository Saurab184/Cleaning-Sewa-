import { Link } from "react-router-dom";
import LogoIcon from "../Logo/LogoIcon";
import './Footer.css';

const FOOTER_COLS = [
  { heading: 'Browse More', links: ['Vision & Mission', 'History', 'Why Us', 'Timeline'] },
  { heading: 'Resources', links: ['Gallery', 'QR', 'Glossary', 'Message'] },
  { heading: 'Links', links: ['Calendar', 'FAQ', 'Testimonials', 'Video'] },
  { heading: 'Explore', links: ['Refund Policy', 'Partnership', 'Blog', 'Team'] },
];

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <Link to="/" className="footer-brand-logo">
            <LogoIcon height={60} />
          </Link>
          <p className="footer-desc">
            Cleaning Sewa is a leading professional cleaning company in Kathmandu, Nepal,
            offering top-quality, reliable, and affordable cleaning services for homes, offices,
            and commercial spaces.
          </p>
          <p className="footer-desc-bottom">
            Our mission is to empower households and businesses with reliable, efficient, and
            eco-friendly cleaning services that ensure a spotless, healthy environment while
            saving time and effort.
          </p>
        </div>
        {FOOTER_COLS.map((col) => (
          <div className="footer-col" key={col.heading}>
            <h4>{col.heading}</h4>
            <ul>
              {col.links.map(link => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-mid-wrapper">
        <div className="footer-mid">
          <div className="footer-socials">
            <a href="#" title="X">&#10005;</a>
            <a href="#" title="Blog" style={{ fontWeight: 'bold', fontSize: '0.78rem' }}>B</a>
            <a href="#" title="YouTube" style={{ fontSize: '0.8rem' }}>&#9654;</a>
            <a href="#" title="LinkedIn" style={{ fontWeight: 'bold', fontSize: '0.78rem' }}>in</a>
            <a href="#" title="Discord" style={{ fontSize: '0.75rem' }}>&#9670;</a>
            <a href="#" title="Viber" style={{ fontSize: '0.8rem' }}>&#128222;</a>
          </div>
          <div className="footer-contacts">
            <button className="footer-contact-btn">&#9993; cleaningsewa@sriyog.com</button>
            <button className="footer-contact-btn">&#128222; +977-98520 24365</button>
            <button className="footer-contact-btn">&#128172; +977 98520 24365</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All Rights Reserved. &#169; 2018-2026 Cleaning Sewa Built With : React </p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span className="footer-divider">|</span>
          <a href="#">Disclaimer</a>
          <span className="footer-divider">|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
