import './FloatingButtons.css';
import { FaPhoneVolume, FaWhatsapp } from 'react-icons/fa6';

function FloatingButtons() {
  return (
    <>
      <div className="floating-btns">
        <button className="float-btn pulse" title="Call us">
          <FaPhoneVolume />
        </button>

        <button className="float-btn jump" title="WhatsApp">
          <FaWhatsapp />
        </button>
      </div>

      <button
        className="float-btn-scroll"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {/* chevron arrow drawn as an SVG line */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="3" strokeLinecap="butt" strokeLinejoin="miter">
          <path d="M3 17 L12 8 L21 17" />
        </svg>
      </button>
    </>
  );
}

export default FloatingButtons;