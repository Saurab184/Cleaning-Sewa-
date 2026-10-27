
const LOGO_SRC = "/cleaning-sewa-logo-wordmark.svg";

function LogoIcon({ height = 44 }) {
  return (
    <img src={LOGO_SRC} alt="Cleaning Sewa" style={{ height: `${height}px`, width: "auto", display: "block" }} />
  );
}
export default LogoIcon;