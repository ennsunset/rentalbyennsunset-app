"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, Heart, MapPin, Menu, Search, ShieldCheck, SlidersHorizontal, Sparkles, Star, Users, X, Zap } from "lucide-react";

type Car = { id: number; name: string; type: string; category: string; seats: number; transmission: string; price: number; rating: number; image: string; tag?: string; color: string };
const cars: Car[] = [
  { id: 1, name: "Porsche 911 Carrera", type: "Sports · 2024", category: "Sport", seats: 2, transmission: "Automatic", price: 289, rating: 4.98, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85", tag: "MOST POPULAR", color: "#d8d1c5" },
  { id: 2, name: "Mercedes-Benz G-Class", type: "SUV · 2024", category: "SUV", seats: 5, transmission: "Automatic", price: 345, rating: 4.96, image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=85", tag: "JUST ADDED", color: "#c9d2ce" },
  { id: 3, name: "Tesla Model S", type: "Electric · 2024", category: "Electric", seats: 5, transmission: "Automatic", price: 179, rating: 4.93, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=85", color: "#d6dbe0" },
  { id: 4, name: "Range Rover Sport", type: "SUV · 2023", category: "SUV", seats: 5, transmission: "Automatic", price: 259, rating: 4.91, image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85", color: "#d7cfc4" },
  { id: 5, name: "BMW M4 Competition", type: "Sports · 2024", category: "Sport", seats: 4, transmission: "Automatic", price: 219, rating: 4.95, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85", color: "#d4d7db" },
  { id: 6, name: "Audi e-tron GT", type: "Electric · 2024", category: "Electric", seats: 4, transmission: "Automatic", price: 199, rating: 4.89, image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1200&q=85", color: "#d8d2ca" },
];
const categories = ["All cars", "SUV", "Sport", "Electric"];

export default function Home() {
  const [category, setCategory] = useState("All cars");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Los Angeles, CA");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<Car | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [notice, setNotice] = useState("");
  const visibleCars = useMemo(() => cars.filter((car) => (category === "All cars" || car.category === category) && car.name.toLowerCase().includes(search.toLowerCase())), [category, search]);
  const toggleSaved = (id: number) => setSaved((list) => list.includes(id) ? list.filter((item) => item !== id) : [...list, id]);
  const findCars = () => { document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" }); setNotice(`Showing available cars near ${location || "your location"}`); window.setTimeout(() => setNotice(""), 3500); };

  return <main>
    <div className="announcement"><Sparkles size={14} /> Your next great escape starts here <span className="announce-divider">·</span> <a href="#fleet">Explore the fleet <ArrowRight size={13} /></a></div>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="RentByEnn home"><span className="brand-mark">r.</span> rentbyenn<span className="brand-period">.</span></a>
      <nav className={mobileMenu ? "main-nav open" : "main-nav"}><a href="#fleet" onClick={() => setMobileMenu(false)}>Explore cars</a><a href="#how" onClick={() => setMobileMenu(false)}>How it works</a><a href="#reviews" onClick={() => setMobileMenu(false)}>Our story</a><a href="#footer" onClick={() => setMobileMenu(false)}>Help</a></nav>
      <div className="header-actions"><button className="host-link" onClick={() => setNotice("Owner listings are coming soon.")}>List your car</button><button className="sign-in" onClick={() => setNotice("Sign-in is a demo feature for now.")}>Sign in <ArrowUpRight size={14} /></button></div>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X /> : <Menu />}</button>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> THE KEYS TO EVERYWHERE</div><h1>Take the<br /><em>scenic route.</em></h1><p className="hero-subtitle">The right car changes everything.<br className="desktop-break" /> Find your perfect drive and go.</p>
        <div className="search-panel">
          <label className="search-field location-field"><MapPin size={18} /><span><small>Pick-up location</small><input aria-label="Pick-up location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Where are you going?" /></span><ChevronDown size={16} className="field-chevron" /></label>
          <div className="search-separator" />
          <label className="search-field"><CalendarDays size={18} /><span><small>Pick-up</small><input aria-label="Pick-up date" type="date" value={pickup} onChange={(e) => setPickup(e.target.value)} /></span></label>
          <div className="search-separator" />
          <label className="search-field"><CalendarDays size={18} /><span><small>Return</small><input aria-label="Return date" type="date" value={dropoff} onChange={(e) => setDropoff(e.target.value)} /></span></label>
          <button className="search-button" onClick={findCars}><Search size={18} /><span>Find a car</span></button>
        </div>
        <div className="hero-proof"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>K</span></div><div><div className="proof-stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><b>4.9/5</b></div><small>Loved by 12,000+ happy drivers</small></div></div>
      </div>
      <div className="hero-art"><div className="hero-image" role="img" aria-label="Classic sports car on a scenic coastal road" /><div className="hero-image-overlay" /><div className="hero-location"><span className="location-dot" /><span>Pacific Coast Highway, CA</span><ArrowUpRight size={15} /></div><div className="image-count"><span>01</span> / 04</div><div className="hero-note"><span className="note-icon"><Zap size={17} fill="currentColor" /></span><span><b>Make room for the moment.</b><small>Every journey, a little more extraordinary.</small></span></div></div>
    </section>

    <section className="trust-strip"><div><ShieldCheck size={19} /><span><b>Every car is verified</b><small>Quality you can count on</small></span></div><div><Zap size={19} /><span><b>Book in minutes</b><small>Simple, seamless, done</small></span></div><div><Heart size={19} /><span><b>Made for real life</b><small>Support when you need it</small></span></div><div className="trust-rating"><Star size={17} fill="currentColor" /><b>4.9</b><span>from 2,400+ reviews</span></div></section>

    <section className="fleet-section" id="fleet"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> THE GOOD STUFF</div><h2>Find your <em>kind</em> of drive.</h2><p>Hand-picked rides for wherever life takes you.</p></div><a className="view-all" href="#fleet">View all cars <ArrowRight size={16} /></a></div>
      <div className="fleet-toolbar"><div className="category-tabs">{categories.map((item) => <button key={item} className={category === item ? "category-tab active" : "category-tab"} onClick={() => setCategory(item)}>{item}{item === "All cars" && <span className="tab-count">06</span>}</button>)}</div><div className="fleet-tools"><label className="fleet-search"><Search size={16} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Find a car" aria-label="Search cars" /></label><button className="filter-button" onClick={() => setNotice("Tip: select a category to narrow down the fleet.")}><SlidersHorizontal size={16} /> Filters</button></div></div>
      {notice && <div className="notice" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss"><X size={15} /></button></div>}
      <div className="car-grid">{visibleCars.map((car) => <article className="car-card" key={car.id}><div className="car-image-wrap" style={{ backgroundColor: car.color }}><img src={car.image} alt={car.name} loading="lazy" /><div className="car-image-top">{car.tag && <span className="car-tag">{car.tag}</span>}<button className={saved.includes(car.id) ? "save-button saved" : "save-button"} aria-label={saved.includes(car.id) ? `Remove ${car.name} from saved cars` : `Save ${car.name}`} onClick={() => toggleSaved(car.id)}><Heart size={17} fill={saved.includes(car.id) ? "currentColor" : "none"} /></button></div><div className="image-pagination"><span className="pagination-active" /><span /><span /></div></div><div className="car-info"><div className="car-title-row"><div><h3>{car.name}</h3><p>{car.type}</p></div><span className="car-rating"><Star size={13} fill="currentColor" /> {car.rating}</span></div><div className="car-specs"><span><Users size={14} /> {car.seats} seats</span><span><span className="gear-icon">A</span> {car.transmission}</span><span><Zap size={14} /> Unlimited miles</span></div><div className="car-card-bottom"><div><strong>${car.price}</strong><span> / day</span></div><button onClick={() => setSelected(car)}>View details <ArrowUpRight size={14} /></button></div></div></article>)}</div>
      {visibleCars.length === 0 && <div className="empty-results">No cars found. Try a different search.</div>}
      <button className="load-more" onClick={() => { setCategory("All cars"); setSearch(""); }}>Explore the full fleet <ArrowDown size={15} /></button>
    </section>

    <section className="story-section" id="how"><div className="story-image"><img src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85" alt="A winding road through the mountains at sunset" loading="lazy" /><div className="story-image-label"><span className="location-dot" /> THE LONG WAY IS THE RIGHT WAY</div></div><div className="story-copy"><div className="eyebrow"><span className="eyebrow-line" /> A BETTER WAY TO GET THERE</div><h2>Less logistics.<br /><em>More living.</em></h2><p>We think renting a car should feel like the start of something, not another thing on your to-do list. So we made it easy to find a car you love, book it without the runaround, and get out there.</p><div className="story-steps"><div><span>01</span><p><b>Find your fit</b><small>Browse a thoughtfully curated fleet.</small></p><ArrowRight size={16} /></div><div><span>02</span><p><b>Make it yours</b><small>Choose your dates and book in a few taps.</small></p><ArrowRight size={16} /></div><div><span>03</span><p><b>Hit the road</b><small>Pick up your keys. The rest is up to you.</small></p><ArrowRight size={16} /></div></div><a className="text-link" href="#fleet">Find your next ride <ArrowRight size={16} /></a></div></section>

    <section className="quote-section" id="reviews"><div className="quote-mark">“</div><p>It felt less like renting a car and more like someone handed us the keys to our best weekend in years.</p><div className="quote-attribution"><div className="quote-avatar">S</div><span><b>Sophie R.</b><small>Weekend wanderer · Los Angeles</small></span><div className="quote-stars">★★★★★</div></div></section>
    <section className="bottom-cta"><div><div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER</div><h2>Somewhere is<br /><em>calling.</em></h2></div><a href="#top" className="cta-button">Let’s find your car <ArrowUpRight size={17} /></a><div className="cta-decoration">r.</div></section>
    <footer id="footer"><a className="brand footer-brand" href="#top"><span className="brand-mark">r.</span> rentbyenn<span className="brand-period">.</span></a><p>Good cars. Great stories. Go make one.</p><div className="footer-links"><a href="#fleet">Explore</a><a href="#how">Our story</a><a href="#footer">Instagram ↗</a><a href="#footer">Get in touch</a></div><small>© 2025 RentByEnn. Made for the way out there.</small></footer>

    {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="booking-modal" role="dialog" aria-modal="true" aria-label={`Book ${selected.name}`} onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close"><X size={19} /></button><img className="modal-car-image" src={selected.image} alt={selected.name} /><div className="modal-content"><div className="eyebrow"><span className="eyebrow-line" /> READY WHEN YOU ARE</div><h2>{selected.name}</h2><p className="modal-subtitle">{selected.type} · {selected.seats} seats · {selected.transmission}</p><div className="modal-rating"><Star size={15} fill="currentColor" /> {selected.rating} <span>· Guest favorite</span></div><div className="modal-dates"><label><small>Pick-up date</small><input type="date" value={pickup} onChange={(e) => setPickup(e.target.value)} /></label><label><small>Return date</small><input type="date" value={dropoff} onChange={(e) => setDropoff(e.target.value)} /></label></div><div className="modal-total"><span>From</span><b>${selected.price}<small> / day</small></b></div><button className="modal-book" onClick={() => { setNotice("Your car is ready to book! Checkout integration can be added later."); setSelected(null); document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" }); }}>Reserve this car <ArrowRight size={16} /></button><p className="modal-fineprint"><Check size={13} /> No payment needed to explore · Secure checkout coming soon</p></div></div></div>}
  </main>;
}
