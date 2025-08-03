import React from "react";
import { FaGlobeAmericas, FaTools, FaUserFriends } from "react-icons/fa";
import "./About.css";

const features = [
  {
    icon: <FaGlobeAmericas title="Vision" />,
    title: "Our Vision",
    text:
      "Connect the world, one journey at a time. Remove travel stress and open new experiences for everyone.",
  },
  {
    icon: <FaTools title="Features" />,
    title: "Advanced Features",
    list: [
      "Drag & drop collaborative itineraries",
      "AI-based smart destination suggestions",
      "Real-time reviews & community tips",
      "Budget analytics & expense tracking",
      "Download & offline access",
    ],
  },
  {
    icon: <FaUserFriends title="For Travelers" />,
    title: "For Every Traveler",
    text:
      "Solo, family, or groups—plan together, share securely, and discover ideas tailored to your style.",
  },
];

export default function About() {
  return (
    <main className="about-bg" aria-labelledby="about-title">
      <header className="about-header">
        <h1 id="about-title">
          About <span className="highlight">Traveler Planner</span>
        </h1>
        <p className="tagline">✨ Where smart journeys begin</p>
      </header>

      <section className="about-hero-section">
        <img
          src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=facearea&w=900"
          alt="Travelers exploring together"
          className="about-hero-img"
          loading="lazy"
        />
        <div>
          <h2>✈️ Your Smart Travel Companion</h2>
          <p>
            Seamlessly plan, organize, and enrich your adventures with AI, social insights,
            and secure collaborative tools. Every trip, every memory—elevated.
          </p>
          <p>
            Designed for travelers who want inspiration, flexibility, and peace of mind.
          </p>
        </div>
      </section>

      <section className="feature-grid">
        {features.map((f, i) => (
          <article className="feature-card glass-card" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            {f.text && <p>{f.text}</p>}
            {f.list && (
              <ul>
                {f.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      <footer className="about-footer">
        <small>
          © {new Date().getFullYear()} Traveler Planner
          <span className="divider">|</span>
          <a href="/accessibility">Accessibility</a>
        </small>
        <div className="about-footer-social">
          <a href="https://twitter.com/" aria-label="Twitter">🐦</a>
          <a href="https://instagram.com/" aria-label="Instagram">📸</a>
        </div>
      </footer>
    </main>
  );
}
