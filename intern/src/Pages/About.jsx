import './About.css';

function CheckIcon() {
  return (
    <svg className="about-check" viewBox="0 0 24 24" width="22" height="22"
         fill="none" stroke="currentColor" strokeWidth="3"
         strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
         stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const MISSION_POINTS = [
  'Professional & Trained Staff',
  'Eco-Friendly Products',
  '100% Customer Satisfaction',
];

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <h1>About Cleaning Services in Nepal</h1>
        <p>
          Providing professional, eco-friendly, and reliable home cleaning
          services across Nepal.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="about-block">
        <h2 className="about-heading">Who We Are</h2>
        <p className="about-text">
          Cleaning Sewa is a trusted cleaning service provider dedicated to making
          homes and offices spotless, hygienic, and welcoming. Our team of trained
          professionals uses modern equipment and eco-friendly products to deliver
          the highest standard of cleaning services.
        </p>
        <p className="about-text">
          From deep home cleaning to carpet and sofa care, AC cleaning, and
          post-construction cleanup, we ensure every corner of your space is
          maintained with care and precision.
        </p>
      </section>

      {/* OUR MISSION */}
      <section className="about-mission">
        <h2 className="about-heading">Our Mission</h2>
        <p className="about-mission-text">
          To provide top-quality, reliable, and eco-friendly cleaning solutions
          that make homes and offices cleaner, safer, and healthier for everyone.
        </p>
        <ul className="about-points">
          {MISSION_POINTS.map((point, i) => (
            <li key={point}>
              <CheckIcon />
              <span>{point}</span>
              {i < MISSION_POINTS.length - 1 && (
                <span className="about-divider">|</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* DIRECTOR */}
      <section className="about-block about-director-section">
        <h2 className="about-heading">Message from the Director</h2>
        <div className="about-director">
          <img
            className="about-director-img"
            src="/director.png"
            alt="Ramesh Koirala, Director"
          />
          <div className="about-director-body">
            <p className="about-quote">
              "At Cleaning Sewa, our vision is to create cleaner, healthier living
              and working spaces for every client. Our team is committed to
              excellence, and we continually invest in training and modern
              equipment to ensure you receive the best service possible. Your
              satisfaction is our top priority."
            </p>
            <p className="about-author">– Ramesh Koirala, Director</p>
          </div>
          <a className="about-linkedin" href="#" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </section>
    </main>
  );
}