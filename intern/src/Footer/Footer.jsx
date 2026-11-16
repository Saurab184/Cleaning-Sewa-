import { Link } from "react-router-dom";

import {
  IconBrandX,
  IconBrandBlogger,
  IconBrandYoutube,
  IconBrandTrello,
  IconBrandDiscord,
  IconBrandViber,
  IconBrandWhatsapp,
  IconMailOpened,
  IconPhoneCall,
} from "@tabler/icons-react";
import LogoIcon from "../Logo/LogoIcon";
import "./Footer.css";

const FOOTER_COLS = [
  { heading: "Browse More", links: ["Vision & Mission", "History", "Why Us", "Timeline"] },
  { heading: "Resources", links: ["Gallery", "QR", "Glossary", "Message"] },
  { heading: "Links", links: ["Calendar", "FAQ", "Testimonials", "Video"] },
  { heading: "Explore", links: ["Refund Policy", "Partnership", "Blog", "Team"] },
];

const SOCIALS = [
  { name: "X", href: "https://x.com", Icon: IconBrandX },
  { name: "Blogger", href: "https://yourblog.blogspot.com", Icon: IconBrandBlogger },
  { name: "YouTube", href: "https://youtube.com/@yourchannel", Icon: IconBrandYoutube },
  { name: "Trello", href: "https://trello.com/yourboard", Icon: IconBrandTrello },
  { name: "Discord", href: "https://discord.gg/yourinvite", Icon: IconBrandDiscord },
  { name: "Viber", href: "viber://chat?number=%2B9779852024365", Icon: IconBrandViber },
];

const CONTACTS = [
  {
    label: "cleaningsewa@sriyog.com",
    href: "mailto:cleaningsewa@sriyog.com",
    Icon: IconMailOpened,
  },
  {
    label: "+977-98520 24365",
    href: "tel:+9779852024365",
    Icon: IconPhoneCall,
  },
  {
    label: "+977 98520 24365",
    href: "https://wa.me/9779852024365",
    Icon: IconBrandWhatsapp,
    external: true,
  },
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
              {col.links.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-mid-wrapper">
        <div className="footer-mid">
          <ul className="footer-socials">
            {SOCIALS.map(({ name, href, Icon }) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
                  <Icon size={27} stroke={1.6} />
                </a>
              </li>
            ))}
          </ul>

          <div className="footer-contacts">
            {CONTACTS.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                className="footer-contact-btn"
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <Icon size={21} stroke={1.7} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All Rights Reserved. &#169; 2018-2026 Cleaning Sewa Built With : React</p>
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
