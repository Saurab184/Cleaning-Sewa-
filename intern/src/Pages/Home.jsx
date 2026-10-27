
import './Home.css';

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

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <TopServices />
      <HappyStories />
      <LatestBlogs />
    </>
  );
}