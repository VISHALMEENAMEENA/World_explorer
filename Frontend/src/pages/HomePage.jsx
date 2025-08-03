import React from 'react';
import './HomePage.css'; // HomePage-specific styles
import { 
  FaPlaneDeparture, FaMapMarkedAlt, FaRegSmileBeam, FaHeadset, // For features
  FaQuoteRight, FaStar, FaStarHalfAlt, // For testimonials
  FaArrowRight // For links
} from 'react-icons/fa'; 

const HomePage = () => {
  return (
    <div className="home-page-wrapper">

     <section className="hero-section immersive-hero">
      <div className="hero-overlay"></div> {/* Dark overlay for readability */}
      <div className="hero-content">
        <h1>Your Journey, Reimagined.</h1>
        <p>
          From the bustling bazaars of India to the serene beaches of the Maldives,
          we craft journeys that resonate with your soul.
        </p>
        <div className="hero-buttons">
          <a href="/planner" className="hero-button primary-button">
            Start Your Adventure <FaArrowRight />
          </a>
          <a href="/about" className="hero-button secondary-button">
            Learn More
          </a>
        </div>
      </div>
    </section>

      {/* About/Introduction Section - Alternating Layout */}
      <section className="section-padded content-block">
        <div className="content-block-inner">
          <div className="content-text">
            <h2 className="section-heading">About Traveler Planner</h2>
            <p className="section-description">
              We believe travel is more than just visiting places; it's about experiencing cultures,
              creating memories, and discovering yourself. Our platform empowers you to design
              your perfect trip with expert guidance and seamless execution.
            </p>
            <p>
              Whether you're a solo explorer, a family on vacation, or a group seeking adventure,
              Traveler Planner is your trusted companion for every step of the journey.
            </p>
            <a href="/about" className="text-link">Discover Our Story <FaArrowRight /></a>
          </div>
          <div className="content-image">
            {/* REPLACE THIS URL with your actual image for the 'Travel Experience' section */}
            <img 
              src="https://placehold.co/600x400/87CEEB/ffffff?text=Travel+Experience" 
              alt="People enjoying travel" 
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Error"; }} 
            />
          </div>
        </div>
      </section>

    

      {/* Featured Destinations - India */}
      <section className="section-padded featured-destinations">
        <h2 className="section-heading">Iconic India</h2>
        <p className="section-description">
          Explore the timeless beauty and diverse cultures of incredible India.
        </p>
        <div className="destination-carousel-container"> {/* Could be a carousel, here it's a grid */}
          <div className="destination-card-v2"> {/* New card class */}
            {/* REPLACE THIS URL with your actual image for Taj Mahal, Agra */}
            <img src="https://www.hoteldekho.com/storage/img/tourattraction/1643730078sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg" alt="Taj Mahal, Agra" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Error"; }} />
            <div className="card-info">
              <h3>Agra, Uttar Pradesh</h3>
              <p>The timeless symbol of love.</p>
              <a href="/india/agra" className="card-link">Explore <FaArrowRight /></a>
            </div>
          </div>
          <div className="destination-card-v2">
            {/* REPLACE THIS URL with your actual image for Kerala Backwaters */}
            <img src="https://miro.medium.com/v2/resize:fit:1400/0*_3IoWJju47mzO4bh" alt="Kerala Backwaters" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Error"; }} />
            <div className="card-info">
              <h3>Kerala, South India</h3>
              <p>Serene backwaters and lush greenery.</p>
              <a href="/india/kerala" className="card-link">Explore <FaArrowRight /></a>
            </div>
          </div>
          <div className="destination-card-v2">
              <img
                src="https://unpluggedlife.in/wp-content/uploads/2020/11/Unplugged_Life_Lakes_21.jpg"
                alt="Leh-Ladakh"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Error";
                }}
              />
              <div className="card-info">
                <h3>Leh-Ladakh, India</h3>
                <p>Majestic mountains and clear skies for adventure lovers.</p>
                <a href="/india/leh-ladakh" className="card-link">Explore <FaArrowRight /></a>
              </div>
          </div>
          <div className="destination-card-v2">
            {/* REPLACE THIS URL with your actual image for Jaipur, Rajasthan */}
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/01/00/1a/f1/caption.jpg" alt="Jaipur, Rajasthan" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Error"; }} />
            <div className="card-info">
              <h3>Jaipur, Rajasthan</h3>
              <p>The vibrant Pink City's royal heritage.</p>
              <a href="/india/jaipur" className="card-link">Explore <FaArrowRight /></a>
            </div>
          </div>
        </div>
        <div className="view-all-link">
            <a href="/india" className="button-outline">View All India Destinations <FaArrowRight /></a>
        </div>
      </section>

      {/* Featured Destinations - Worldwide */}
      <section className="section-padded featured-destinations reverse-layout"> {/* Added reverse-layout */}
        <h2 className="section-heading">Global Adventures</h2>
        <p className="section-description">
          From ancient cities to natural wonders, discover the world's most captivating places.
        </p>
        <div className="destination-carousel-container">
          <div className="destination-card-v2">
            {/* REPLACE THIS URL with your actual image for Eiffel Tower, Paris */}
            <img src="https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg" alt="Eiffel Tower, Paris" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Error"; }} />
            <div className="card-info">
              <h3>Paris, France</h3>
              <p>The romantic City of Lights.</p>
              <a href="/world/paris" className="card-link">Explore <FaArrowRight /></a>
            </div>
          </div>
          <div className="destination-card-v2">
            {/* REPLACE THIS URL with your actual image for Machu Picchu, Peru */}
            <img src="https://www.incatrailmachu.com/img/machu-picchu-02-011.jpg" alt="Machu Picchu, Peru" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Error"; }} />
            <div className="card-info">
              <h3>Machu Picchu, Peru</h3>
              <p>Mystical ancient Inca city.</p>
              <a href="/world/machu-picchu" className="card-link">Explore <FaArrowRight /></a>
            </div>
          </div>
          <div className="destination-card-v2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIMzf8l-TgD-_fPPgJ2OOx4MP--qTRaH2qw&s"
              alt="Switzerland Alps"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Error";
              }}
            />
            <div className="card-info">
              <h3>Switzerland Alps</h3>
              <p>Snowy peaks and scenic landscapes for perfect escapes.</p>
              <a href="/world/switzerland" className="card-link">Explore <FaArrowRight /></a>
            </div>
          </div>
          <div className="destination-card-v2">
            {/* REPLACE THIS URL with your actual image for Great Wall, China */}
            <img src="https://whc.unesco.org/uploads/thumbs/site_0438_0035-750-750-20241024162522.jpg" alt="Great Wall of China" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Error"; }} />
            <div className="card-info">
              <h3>Great Wall, China</h3>
              <p>An engineering marvel of history.</p>
              <a href="/world/great-wall" className="card-link">Explore <FaArrowRight /></a>
            </div>
          </div>
        </div>
        <div className="view-all-link">
            <a href="/world" className="button-outline">View All World Destinations <FaArrowRight /></a>
        </div>
      </section>

      {/* Testimonials Section - Emphasized Quotes */}
      <section className="section-padded testimonials-section">
        <h2 className="section-heading">Our Travelers' Experiences</h2>
        <p className="section-description">
          Hear directly from those who've embarked on unforgettable journeys with Traveler Planner.
        </p>
        <div className="testimonial-grid-v2"> {/* New grid class */}
          <div className="testimonial-card-v2">
            <FaQuoteRight className="quote-icon-v2" />
            <p className="testimonial-text-v2">
              "Absolutely blown away by the seamless planning and incredible recommendations! My trip to Rajasthan was a dream come true."
            </p>
            <div className="testimonial-author-info">
              <span className="author-name">Priya Sharma</span>
              <span className="author-location">Jaipur, India</span>
            </div>
            <div className="rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>
          <div className="testimonial-card-v2">
            <FaQuoteRight className="quote-icon-v2" />
            <p className="testimonial-text-v2">
              "From Paris to Rome, Traveler Planner handled every detail. I could truly relax and immerse myself in the experience."
            </p>
            <div className="testimonial-author-info">
              <span className="author-name">David Chen</span>
              <span className="author-location">New York, USA</span>
            </div>
            <div className="rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            </div>
          </div>
          <div className="testimonial-card-v2">
            <FaQuoteRight className="quote-icon-v2" />
            <p className="testimonial-text-v2">
              "The 24/7 support was a lifesaver when I had a last-minute flight change. Truly reliable and highly recommended!"
            </p>
            <div className="testimonial-author-info">
              <span className="author-name">Sophia Martinez</span>
              <span className="author-location">Mexico City, Mexico</span>
             fungicide
            </div>
            <div className="rating">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>
        </div>
      </section>

        {/* Why Choose Us - Feature Grid with Icons */}
      <section className="section-padded why-choose-us">
        <h2 className="section-heading">Why Choose Us?</h2>
        <p className="section-description">
          Experience travel planning redefined with our unique advantages.
        </p>
        <div className="feature-grid-v2"> {/* New grid class */}
          <div className="feature-item">
            <div className="icon-circle"><FaMapMarkedAlt /></div>
            <h3>Personalized Itineraries</h3>
            <p>Tailored plans that match your interests, pace, and budget.</p>
          </div>
          <div className="feature-item">
            <div className="icon-circle"><FaPlaneDeparture /></div>
            <h3>Best Value Guaranteed</h3>
            <p>Access exclusive deals on flights, hotels, and vacation packages.</p>
          </div>
          <div className="feature-item">
            <div className="icon-circle"><FaHeadset /></div>
            <h3>24/7 Expert Support</h3>
            <p>Dedicated assistance before, during, and after your journey.</p>
          </div>
          
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="cta-block final-cta">
        <h2>Ready to Explore the World?</h2>
        <p>
          Join our community of passionate travelers and start planning your personalized journey today.
        </p>
        <a href="/login" className="cta-button">Sign Up for Free</a>
      </section>
    </div>
  );
};

export default HomePage;
