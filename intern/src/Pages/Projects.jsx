import './Projects.css';

// Each project is one object: image, name, description.
// IMPORTANT: change the img paths to match your real file names in /public
const PROJECTS = [
  { img: '/images/Projects/Solatee.jpg', title: 'Solatee Westend', desc: 'Comprehensive corporate and facility cleaning services for a spotless guest experience.' },
  { img: '/images/Projects/bajeko.jpg', title: 'Bajeko Sekuwa', desc: 'Deep kitchen and dining area sanitization for hygienic restaurant operations.' },
  { img: '/images/Projects/sudarshan.jpg', title: 'Sudarshan Resort', desc: 'Full resort cleaning including guest rooms, lobby, and common areas.' },
  { img: '/images/Projects/pokhara-airport.jpg', title: 'Pokhara Airport', desc: 'Terminal and restroom cleaning ensuring safe and hygienic spaces for travelers.' },
  { img: '/images/Projects/gokarna.jpg', title: 'Gokarna Forest Resort', desc: 'Garden, lobby, and room cleaning for a pristine natural retreat.' },
  { img: '/images/Projects/ncell.jpg', title: 'Ncell', desc: 'Office and corporate space cleaning, including desks, conference rooms, and common areas.' },
  { img: '/images/Projects/dusit.jpg', title: 'Dusit Thani Himalaya Resort', desc: 'Post-construction and daily maintenance cleaning for luxury accommodation.' },
  { img: '/images/Projects/club-himalaya.jpg', title: 'Club Himalaya', desc: 'Event cleaning, lobby and facility sanitation for guest comfort and hygiene.' },
  { img: '/images/Projects/bhadgaon.jpg', title: 'Hotel Bhadgaon', desc: 'Complete hotel cleaning and housekeeping services for guest satisfaction.' },
  { img: '/images/Projects/kavya.jpg', title: 'Kavya Himalayas', desc: 'Corporate and residential cleaning services for office and lounge areas.' },
  { img: '/images/Projects/mercure.jpg', title: 'Mercure Kathmandu', desc: 'Room, lobby, and kitchen cleaning maintaining international hospitality standards.' },
  { img: '/images/Projects/guest-house.jpg', title: 'Kathmandu Guest House', desc: 'Regular and deep cleaning services for a safe and comfortable stay.' },
  { img: '/images/Projects/sankha-park.jpg', title: 'Sankha Park', desc: 'Public space cleaning including pathways, lawns, and restrooms.' },
  { img: '/images/Projects/aikawa.jpg', title: 'Hotel Aikawa, Sauraha', desc: 'Comprehensive guest room, lobby, and kitchen cleaning services.' },
  { img: '/images/Projects/british-school.jpg', title: 'The British School', desc: 'Classroom, corridor, and office cleaning ensuring a healthy learning environment.' },
  { img: '/images/Projects/ramesh-corp.jpg', title: 'Ramesh Corp', desc: 'Corporate office cleaning and desk sanitization services for employees’ safety.' },
  { img: '/images/Projects/nabil-bank.jpg', title: 'Nabil Bank', desc: 'Bank branch cleaning including ATMs, counters, and customer areas.' },
  { img: '/images/Projects/budhanilkantha.jpg', title: 'Budhanilkantha School', desc: 'Classroom, playground, and restroom sanitization for students’ health.' },
  { img: '/images/Projects/shankhamul.jpg', title: 'Shankhamul Park', desc: 'Park and public area cleaning including pathways, benches, and playgrounds.' },
  { img: '/images/Projects/ullens.jpg', title: 'Ullens School', desc: 'Professional classroom, library, and cafeteria cleaning services.' },
  { img: '/images/Projects/alice.jpg', title: 'Alice Receptions', desc: 'Event venue cleaning before and after functions for spotless celebrations.' },
  { img: '/images/Projects/grande.jpg', title: 'Grande International Hospital', desc: 'Hospital and patient area cleaning, including high-touch surface disinfection.' },
  { img: '/images/Projects/silver-oak.jpg', title: 'Silver Oak Banquet', desc: 'Comprehensive banquet cleaning for weddings and corporate events.' },
  { img: '/images/Projects/british-college.jpg', title: 'The British College', desc: 'Classrooms, hallways, and administrative office cleaning services.' },
  { img: '/images/Projects/rani-mahal.jpg', title: 'Rani Mahal Banquet', desc: 'Pre- and post-event cleaning services for a hygienic and polished venue.' },
  { img: '/images/Projects/mediciti.jpg', title: 'Nepal Mediciti Hospital', desc: 'Patient room, lobby, and critical area cleaning with sanitization.' },
  { img: '/images/Projects/frontline.jpg', title: 'Frontline Hospital', desc: 'Hospital-grade cleaning and disinfection services for safety and hygiene.' },
  { img: '/images/Projects/waterfront.jpg', title: 'Waterfront Resort', desc: 'Full resort cleaning including rooms, dining, and outdoor areas.' },
  { img: '/images/Projects/rupys.jpg', title: 'Rupy’s International School', desc: 'Comprehensive school cleaning including classrooms, labs, and playgrounds.' },
  { img: '/images/Projects/norvic.jpg', title: 'Norvic Hospital', desc: 'Patient care area cleaning and sanitation for a safe hospital environment.' },
  { img: '/images/Projects/fortune.jpg', title: 'Fortune Resort', desc: 'Full cleaning services including guest rooms, lobby, and banquet halls.' },
  { img: '/images/Projects/dhumbarahi.jpg', title: 'Kathmandu Dhumbarahi', desc: 'Daily housekeeping and deep cleaning for premium hotel rooms.' },
  { img: '/images/Projects/tribhuwan-park.jpg', title: 'Tribhuwan Park', desc: 'Public park cleaning including lawns, pathways, and seating areas.' },
  { img: '/images/Projects/basundhara.jpg', title: 'Basundhara Park', desc: 'Professional cleaning services for recreational spaces, pathways, and greenery.' },
  { img: '/images/Projects/garden-of-dreams.jpg', title: 'Garden of Dreams', desc: 'Historical garden and public area cleaning ensuring a pleasant visitor experience.' },
  { img: '/images/Projects/remwork.jpg', title: 'Rem.Work', desc: 'Indoor office cleaning and workspace sanitization to maintain a productive environment.' },
];

export default function Projects() {
  return (
    <main>
      {/* Green banner at the top */}
      <section className="projects-hero">
        <h1>Our Projects</h1>
        <p>
          Cleaning Sewa’s portfolio of beautifully maintained gardens, resorts,
          hotels, schools, and corporate spaces across Nepal.
        </p>
      </section>

      {/* Grid of project cards */}
      <section className="projects-section">
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.title}>
              <img src={p.img} alt={p.title} />
              <div className="project-card-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}