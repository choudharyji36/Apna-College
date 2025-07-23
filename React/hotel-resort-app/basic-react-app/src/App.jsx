import React from 'react';
import './App.css';
// Para una réplica exacta, instala react-icons: npm install react-icons
import { FaRegCalendarAlt, FaChevronLeft, FaChevronRight, FaStar, FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from 'react-icons/fa';

// Componente para el logo para poder reutilizarlo
const Logo = () => (
    <div className="logo">
        <svg width="45" height="45" viewBox="0 0 100 100" className="logo-svg">
            <path d="M20 90 C40 70, 40 30, 50 10 C60 30, 60 70, 80 90" stroke="white" strokeWidth="8" fill="transparent" />
            <path d="M30 90 C45 75, 45 45, 50 25 C55 45, 55 75, 70 90" stroke="#c09a6b" strokeWidth="8" fill="transparent" />
        </svg>
        <div className="logo-text">
            <span>IMPERIAL</span>
            <span>GRAND HOTEL</span>
        </div>
    </div>
);


function App() {
  return (
    <div className="app-container">
      {/* ======================= SECCIÓN 1: HERO & HEADER ======================= */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <nav className="navbar">
          <Logo />
          <ul className="nav-links">
            <li><a href="#home">HOME <span>▼</span></a>
                <ul className="dropdown">
                    <li><a href="#home1">HOME 1</a></li>
                    <li><a href="#home2">HOME 2</a></li>
                </ul>
            </li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#service">SERVICE</a></li>
            <li><a href="#pages">PAGES <span>▼</span></a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>

        <main className="hero-content">
          <p className="subtitle">BEST PLACE TO RELAX & ENJOY</p>
          <h1>A Luxurious Way To<br/>Enjoy Your Life</h1>
          <a href="#rooms" className="discover-button">Discover Rooms <span className="arrow-span">></span></a>
        </main>
        
        <div className="slider-controls">
          <button className="slider-arrow"><FaChevronLeft /></button>
          <button className="slider-arrow"><FaChevronRight /></button>
        </div>

        <div className="booking-bar">
          <div className="booking-field">
            <label>Check In</label>
            <div className="input-with-icon">
              <input type="text" defaultValue="24 December 2023" />
              <FaRegCalendarAlt className="calendar-icon" />
            </div>
          </div>
          <div className="booking-field">
            <label>Check Out</label>
            <div className="input-with-icon">
              <input type="text" defaultValue="26 December 2023" />
              <FaRegCalendarAlt className="calendar-icon" />
            </div>
          </div>
          <div className="booking-field">
            <label>Room</label>
            <select defaultValue="1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <button className="check-availability-btn">Check Availability <span className="arrow-span">></span></button>
        </div>
      </header>
      
      {/* ======================= SECCIÓN 2: ROOM CHOICES ======================= */}
        <section className="rooms-section">
          <div className="section-title">
            <p>OUR ROOM CHOICES</p>
            <h2>Luxury Rooms & Suites</h2>
          </div>
          <div className="rooms-grid">
            <div className="room-card large">
              <div className="room-image"></div>
              <div className="room-info">
                <h3>Superior Suite</h3>
                <p>$300/Night</p>
                <a href="#book">Book Now ></a>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image"></div>
              <div className="room-info">
                <h3>Junior Suite</h3>
                <p>$270/Night</p>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image"></div>
              <div className="room-info">
                <h3>Deluxe Room</h3>
                <p>$210/Night</p>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image"></div>
              <div className="room-info">
                <h3>Double Room</h3>
                <p>$180/Night</p>
              </div>
            </div>
            <div className="room-card">
              <div className="room-image"></div>
              <div className="room-info">
                <h3>Family Room</h3>
                <p>$150/Night</p>
              </div>
            </div>
          </div>
        </section>

      {/* ======================= SECCIÓN 3: AMENITIES ======================= */}
      <section className="amenities-section">
        <div className="section-title">
           <div className="title-line"></div>
           <p className="subtitle">INTRODUCING OUR SERVICES</p>
           <h2>Amenities That You Can Enjoy</h2>
        </div>
        <div className="amenities-content">
            <p className="amenities-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="amenities-grid">
            <div className="amenity-placeholder-light"></div>
            <div className="amenity-card">
              <h3>Workout & Yoga Rooms</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#discover">Discover More <span className="arrow-span">></span></a>
            </div>
            <div className="amenity-card">
              <h3>Spa, Massage & Sauna</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#discover">Discover More <span className="arrow-span">></span></a>
            </div>
            <div className="amenity-placeholder-light"></div>
            <div className="amenity-placeholder-light"></div>
            <div className="amenity-card">
              <h3>Multiple Cuisines & Beverages</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#discover">Discover More <span className="arrow-span">></span></a>
            </div>
        </div>
      </section>

      {/* ======================= SECCIÓN 4: CUSTOMER REVIEW ======================= */}
      <section className="testimonial-section">
        <div className="testimonial-overlay"></div>
        <div className="section-title">
          <div className="title-line gold"></div>
          <p className="subtitle">OUR CUSTOMER REVIEW</p>
          <h2 style={{color: '#fff'}}>What Our Client Says</h2>
        </div>
        <div className="testimonial-box">
            <div className="testimonial-image-placeholder"></div>
            <div className="testimonial-text">
                <div className="stars">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</p>
                <p className="client-name">Jackson Dean</p>
                <p className="client-status">Guest</p>
            </div>
        </div>
        <div className="slider-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
        </div>
      </section>

      {/* ======================= SECCIÓN 5: TEAM ======================= */}
      <section className="team-section">
        <div className="section-title">
            <div className="title-line"></div>
            <p className="subtitle">MEET OUR TEAM</p>
            <h2>Expert Team Persons</h2>
        </div>
        <div className="team-grid">
            <div className="team-member">
                <div className="team-photo-placeholder"></div>
                <h4>Laurent Wayne</h4>
                <p>Hotel Manager</p>
            </div>
            <div className="team-member">
                <div className="team-photo-placeholder"></div>
                <h4>Josh Mullins</h4>
                <p>Kitchen Manager</p>
            </div>
            <div className="team-member">
                <div className="team-photo-placeholder"></div>
                <h4>Andrea Hugh</h4>
                <p>Recepcionista</p>
            </div>
            <div className="team-member">
                <div className="team-photo-placeholder"></div>
                <h4>James Norman</h4>
                <p>Room Service</p>
            </div>
        </div>
      </section>

      {/* ======================= SECCIÓN 6: FOOTER ======================= */}
      <footer className="footer">
        <div className="footer-main">
            <div className="footer-col about">
                <Logo />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="footer-col links">
                <h4>USEFUL LINKS</h4>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#service">SERVICE</a></li>
                    <li><a href="#room">ROOM</a></li>
                </ul>
            </div>
            <div className="footer-col subscribe">
                <h4>SUBSCRIBE</h4>
                <p>Don't miss to subscribe our news, kindly fill the form below.</p>
                <form className="subscribe-form">
                    <input type="email" placeholder="Your Email Here" />
                    <button type="submit"><span className="arrow-span">></span></button>
                </form>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="social-icons">
                <a href="#twitter"><FaTwitter /></a>
                <a href="#facebook"><FaFacebookF /></a>
                <a href="#pinterest"><FaPinterestP /></a>
                <a href="#instagram"><FaInstagram /></a>
            </div>
            <div className="copyright">
                <p>© 2025 Imperial Grand Hotel. All Rights Reserved.</p>
            </div>
            <div className="footer-legal">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Use</a>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


 

