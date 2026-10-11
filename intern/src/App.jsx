import './App.css';

const NAV_LINKS = ['Home', 'About', 'Services', 'Projects', 'Contact'];

const SERVICES = [
  {
    img: '/car_cleaning.jpg',
    title: 'Car Interior Cleaning',
    desc: 'Deep & detailed cleaning for luxury & precious vehicles, making every corner spotless.',
    highlight: 'luxury & precious vehicles',
  },
  {
    img: '/services-garden-cleaning.jpg',
    title: 'Garden Cleaning',
    desc: 'Professional garden maintenance & deep cleaning services to keep your outdoor spaces beautiful.',
    highlight: 'Professional garden maintenance & deep cleaning services',
  },
  {
    img: '/kitchen_cleaning.jpg',
    title: 'Kitchen Cleaning',
    desc: 'We provide best kitchen cleaning service using international standard chemicals and equipments.',
    highlight: 'international standard chemicals',
  },
];

const TESTIMONIALS = [
  {
    img: '/testimonial1.png', // img1 on happy stories section
    name: 'Rajesh Thapa',
    plain: '"Amazing service! ',
    highlight: 'The team is punctual, professional, and pays attention to every detail.',
    end: ' Highly recommend."',
  },
  {
    img: '/testimonial2.png', // img2 on happy stories section
    name: 'Sumnitra Shrestha',
    plain: '"',
    highlight: 'Our office has never been cleaner. Consistent, thorough, and friendly staff.',
    end: ' Very satisfied!"',
  },
  {
    img: '/testimonial3.png', // img3 on happy stories section
    name: 'Vikas Pandey',
    plain: '"Post-renovation cleanup was perfect. ',
    highlight: 'Efficient and detail-oriented team. Definitely recommend!',
    end: '"',
  },
];

const BLOGS = [
  {
    img: '/ac_cleaning.jpg',
    title: 'AC Cleaning Tips',
    plain: 'Simple tricks to keep your air conditioner clean and ',
    highlight: 'efficient',
    end: '.',
  },
  {
    img: '/bathroom_cleaning.jpg',
    title: 'Bathroom Cleaning Tips',
    plain: 'Easy ways to make your floors sparkle and ',
    highlight: 'last longer',
    end: '.',
  },
  {
    img: '/garden_cleaning.jpg',
    title: 'Garden Cleaning Tips',
    plain: '',
    highlight: 'Tips for keeping your garden clean',
    end: ' and well-maintained.',
  },
];

const FOOTER_COLS = [
  { heading: 'Browse More', links: ['Vision & Mission', 'History', 'Why Us', 'Timeline'] },
  { heading: 'Resources', links: ['Gallery', 'QR', 'Glossary', 'Message'] },
  { heading: 'Links', links: ['Calendar', 'FAQ', 'Testimonials', 'Video'] },
  { heading: 'Explore', links: ['Refund Policy', 'Partnership', 'Blog', 'Team'] },
];

const PARTNER_NAMES = [
  'IDA Products', 'Balwaan', 'Hardware Pasal', 'Miraclevents',
  'Felco', 'Deep Jyoti Garden Tools', 'HiPerFect', 'Karcher', 'A Better Price',
];

function LogoIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#13605b" />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fontSize="18" fontWeight="bold" fill="#fff" fontFamily="Arial">σ</text>
    </svg>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <LogoIcon />
        <span>Cleaning Sewa</span>
      </div>
      <ul className="navbar-links">
        {NAV_LINKS.map(link => (
          <li key={link}><a href="#">{link}</a></li>
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

function Hero() {
  return (
    <section className="hero">
      <img src="/hero_family.jpg" alt="Happy family in clean home" className="hero-img" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p>Welcome to</p>
        <h1>Cleaning Sewa</h1>
        <p className="subtitle">Professional cleaning services in Kathmandu, Nepal.</p>
        <div className="hero-buttons">
          <button className="hero-btn">About</button>
          <button className="hero-btn">Book a Service</button>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const doubled = [...PARTNER_NAMES, ...PARTNER_NAMES];
  return (
    <div className="partners-bar">
      <div className="partners-track">
        {doubled.map((name, i) => (
          <span key={i} className="partner-name">{name}</span>
        ))}
      </div>
    </div>
  );
}

function HighlightText({ plain, highlight, end }) {
  return (
    <span>
      {plain}
      <span style={{ color: 'grey' }}>{highlight}</span>
      {end}
    </span>
  );
}

function TopServices() {
  return (
    <section className="section">
      <h2 className="section-title">Top Services</h2>
      <div className="cards-grid">
        {SERVICES.map((s, i) => (
          <div className="service-card" key={i}>
            <img src={s.img} alt={s.title} />
            <div className="service-card-body">
              <h3>{s.title}</h3>
              <p>
                {s.desc.split(s.highlight).map((part, idx, arr) =>
                  idx < arr.length - 1
                    ? <span key={idx}>{part}<span style={{ color: 'grey' }}>{s.highlight}</span></span>
                    : <span key={idx}>{part}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HappyStories() {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">Happy Stories</h2>
      <div className="cards-grid"> 
        {TESTIMONIALS.map((t, i) => (
          <div className="testimonial-card" key={i}>
             <img className= "testimonial-avatar" src={t.img} alt={t.name} />
            
            <p className="testimonial-text">
              <HighlightText plain={t.plain} highlight={t.highlight} end={t.end} />
            </p>
            <span className="testimonial-name">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function LatestBlogs() {
  return (
    <section className="section">
      <h2 className="section-title">Latest Blogs</h2>
      <div className="cards-grid">
        {BLOGS.map((b, i) => (
          <div className="blog-card" key={i}>
            <img src={b.img} alt={b.title} />
            <div className="blog-card-body">
              <h3>{b.title}</h3>
              <p>
                <HighlightText plain={b.plain} highlight={b.highlight} end={b.end} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand-logo">
            <LogoIcon size={34} />
            <span>Cleaning Sewa</span>
          </div>
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
        <p>All Rights Reserved. &#169; 2018-2026 Cleaning Sewa Built With : BroadPress</p>
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

function FloatingButtons() {
  return (
    <>
      <div className="floating-btns">
        <button className="float-btn" title="Call us">&#128222;</button>
        <button className="float-btn" title="WhatsApp">&#128172;</button>
      </div>
      <button
        className="float-btn-scroll"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        &#8593;
      </button>
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <TopServices />
      <HappyStories />
      <LatestBlogs />
      <Footer />
      <FloatingButtons />
    </>
  );
}