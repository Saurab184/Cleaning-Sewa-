import './FloatingButtons.css';

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
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        &#8593;
      </button>
    </>
  );
}

export default FloatingButtons;