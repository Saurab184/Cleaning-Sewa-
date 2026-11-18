import './Services.css';

// Add each image path as '/images/Services/<name>.jpg' when your images are ready.
// While img is empty, a grey placeholder block is shown.
const SERVICES = [
  {
    img: '/images/Services/bathroom-cleaning.jpg',
    title: 'Bathroom Cleaning',
    desc: 'Professional bathroom cleaning in Nepal. We deep clean tiles, sinks, toilets, showers, mirrors, and remove mold, soap scum, hard water stains, and bacteria. Using eco-friendly cleaning solutions and advanced equipment, we ensure a fresh, hygienic, and safe bathroom environment.',
  },
  {
    img: '/images/Services/kitchen-cleaning.jpg',
    title: 'Kitchen Cleaning',
    desc: 'Expert kitchen cleaning service in Nepal. We sanitize countertops, cabinets, sinks, stovetops, and appliances, removing grease, grime, and bacteria. Our professional team ensures a hygienic and safe cooking environment for your home or office.',
  },
  {
    img: '/images/Services/home-cleaning.jpg  ',
    title: 'Home Cleaning',
    desc: 'Comprehensive home cleaning services in Nepal, covering living rooms, bedrooms, kitchens, and bathrooms. We remove dust, dirt, stains, and allergens to maintain a spotless, fresh, and healthy home environment.',
  },
  {
    img: '/images/Services/carpet-cleaning.jpg',
    title: 'Carpet Cleaning',
    desc: 'Professional carpet cleaning in Nepal to remove dirt, dust, allergens, and stubborn stains. We restore your carpets to a clean, fresh, and hygienic state, improving indoor air quality and prolonging carpet life.',
  },
  {
    img: '/images/Services/sofa-upholstery-cleaning.jpg',
    title: 'Sofa / Upholstery Cleaning',
    desc: 'Professional sofa and upholstery cleaning service in Nepal. We deep clean all types of furniture, including fabric, leather, and microfiber sofas, recliners, chairs, and cushions.',
  },
  {
    img: '/images/Services/move-in-move-out-cleaning.jpg',
    title: 'Move-In / Move-Out Cleaning',
    desc: 'Specialized move-in and move-out cleaning service in Nepal. We clean every corner of your property including floors, walls, kitchens, bathrooms, and furniture, ensuring a spotless space ready for new occupants.',
  },
  {
    img: '/images/Services/disinfection-sanitization-services.jpg',
    title: 'Disinfection / Sanitization',
    desc: 'Professional disinfection and sanitization for homes, offices, and commercial spaces in Nepal. We eliminate germs, bacteria, and viruses using safe and effective cleaning solutions, providing a healthy and hygienic environment.',
  },
  {
    img: '/images/Services/ac-cleaning.jpg',
    title: 'A/C Cleaning',
    desc: 'Air conditioner cleaning service in Nepal to improve indoor air quality and system efficiency. We remove dust, allergens, and mold from filters, ducts, and coils, ensuring clean and healthy air circulation.',
  },
  {
    img: '/images/Services/laptop-cleaning.jpg',
    title: 'Laptop Cleaning',
    desc: 'Professional laptop cleaning service in Nepal. We safely remove dust, dirt, and bacteria from keyboards, screens, vents, and ports, enhancing device hygiene and preventing overheating.',
  },
  {
    img: '/images/Services/desktop-cleaning.jpg',
    title: 'Desktop Cleaning',
    desc: 'Professional desktop and workstation cleaning in Nepal. We remove dust, dirt, and debris from computers, monitors, keyboards, and office surfaces, maintaining a clean and healthy workspace.',
  },
  {
    img: '/images/Services/aeroplane-cleaning.jpg',
    title: 'Aeroplane Cleaning',
    desc: 'Aircraft cleaning services in Nepal, including cabin seats, storage areas, and interiors. We ensure a hygienic, sanitized, and comfortable environment for passengers and crew.',
  },
  {
    img: '/images/Services/helicopter-cleaning.jpg',
    title: 'Helicopter Cleaning',
    desc: 'Specialized helicopter cleaning service in Nepal. We sanitize and clean interior surfaces, seating, and equipment while adhering to strict safety standards.',
  },
  {
    img: '/images/Services/reserve-tank-cleaning.jpg',
    title: 'Reserve Tank Cleaning',
    desc: 'Professional cleaning of water storage tanks in Nepal. We remove sludge, debris, and contaminants to ensure safe and clean water supply for homes and businesses.',
  },
  {
    img: '/images/Services/marble-tile-cleaning.jpg',
    title: 'Marble / Tile Cleaning',
    desc: 'Marble and tile cleaning service in Nepal. We remove dirt, stains, and grout discoloration, restoring shine and maintaining the beauty of floors, walls, and surfaces.',
  },
  {
    img: '/images/Services/post-construction-cleaning.jpg',
    title: 'Post-Construction Cleaning',
    desc: 'Thorough post-construction cleaning in Nepal. We remove dust, debris, and residue from newly built or renovated properties to make them move-in ready and spotless.',
  },
  {
    img: '/images/Services/garden-cleaning.jpg',
    title: 'Garden Cleaning',
    desc: 'Professional garden cleaning in Nepal. We remove leaves, debris, trash, and unwanted items to maintain a neat, healthy, and visually appealing outdoor space.',
  },
  {
    img: '/images/Services/garage-cleaning.jpg',
    title: 'Garage Cleaning',
    desc: 'Garage cleaning services in Nepal. We remove dirt, oil stains, and clutter to create a clean, organized, and safe space.',
  },
  {
    img: '/images/Services/air-duct-vent-cleaning.jpg',
    title: 'Air Duct & Vent Cleaning',
    desc: 'Professional air duct and vent cleaning in Nepal to improve airflow, reduce dust accumulation, and maintain healthy indoor air quality.',
  },
  {
    img: '/images/Services/post-event-cleaning.jpg',
    title: 'Post Event Cleaning',
    desc: 'Efficient post-event cleaning in Nepal. We remove trash, spills, and restore spaces to their original condition after parties, events, or gatherings.',
  },
  {
    img: '/images/Services/car-interior-cleaning.jpg',
    title: 'Car Interior Cleaning',
    desc: 'Comprehensive car interior cleaning in Nepal. We clean seats, carpets, mats, and surfaces to remove dirt, stains, and odors, keeping your vehicle fresh and hygienic.',
  },
  {
    img: '/images/Services/facade-cleaning.jpg',
    title: 'Facade Cleaning',
    desc: 'Exterior building cleaning service in Nepal. We remove dirt, grime, and pollution from facades to enhance aesthetics and maintain property value.',
  },
  {
    img: '/images/Services/parquet-cleaning.jpg',
    title: 'Parquet Cleaning',
    desc: 'Professional parquet and wooden floor cleaning in Nepal. We remove dust, stains, and polish surfaces to maintain shine, quality, and longevity.',
  },
  {
    img: '/images/Services/chair-cleaning.jpg',
    title: 'Chair Cleaning',
    desc: 'Deep cleaning for office and home chairs in Nepal. Removes dirt, stains, and odors while maintaining fabric or leather quality for a hygienic seating experience.',
  },
  {
    img: '/images/Services/drainage-cleaning.jpg',
    title: 'Drainage Cleaning',
    desc: 'Professional drain and pipe cleaning in Nepal. We remove blockages and ensure smooth water flow while preventing unpleasant odors and water damage.',
  },
  {
    img: '/images/Services/septic-tank-cleaning.jpg',
    title: 'Septic Tank Cleaning',
    desc: 'Safe septic tank cleaning and maintenance in Nepal. We prevent overflows, remove sludge, and maintain proper sanitation for residential and commercial properties.',
  },
  {
    img: '/images/Services/lift-elevator-cleaning.jpg',
    title: 'Lift / Elevator Cleaning',
    desc: 'Professional cleaning of lifts and elevators in Nepal, focusing on floors, walls, buttons, and handrails to ensure hygiene and safety for all users.',
  },
  {
    img: '/images/Services/corporate-house-cleaning.jpg',
    title: 'Corporate House Cleaning',
    desc: 'Commercial and office cleaning services in Nepal. We maintain clean workspaces, sanitizing offices and communal areas for a professional and healthy environment.',
  },
];

function Hero() {
  return (
    <section className="about-hero services-hero">
      <h1>Professional Cleaning Services in Nepal</h1>
      <p>
        Providing professional, eco-friendly, and reliable home cleaning services
        across Nepal.
      </p>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="services-section">
      <div className="services-grid">
        {SERVICES.map((s) => (
          <article className="services-card" key={s.title}>
            {s.img ? (
              <img src={s.img} alt={`${s.title} service in Nepal`} loading="lazy" />
            ) : (
              <div className="services-card-placeholder" aria-hidden="true" />
            )}
            <div className="services-card-body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <button
                type="button"
                className="services-btn"
                aria-label={`Browse more about ${s.title}`}
              >
                Browse More
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <Hero />
      <ServicesGrid />
    </>
  );
}