import React from "react";
import "./WorkshopPage.css";
import circle4 from "../img/c2.webm";
import Navbar from "../components/NavBar.tsx";
import Gallery from "./Gallery.tsx";
import Footer from "../components/Footer.tsx";

const Workshop = () => {
  return (
    <>
    <Navbar />
    <section className="workshops-hero-container">
  {/* Background Video */}
  <video className="workshops-hero-video" autoPlay loop muted playsInline>
    <source src={circle4} type="video/mp4" />
  </video>
    <div className="hero-overlay"></div>
  <div className="workshops-hero-content">
    <h1 className="workshops-hero-title">
      Explore Our <span style={{ color: "#00fff2" }}>Workshops</span>
    </h1>

    <p className="workshops-hero-subtitle">
      Hands-on learning, real-world skills, and <span style={{ color: "#00fff2" }}>practical knowledge</span> —
      discover the workshops that empower our community.
    </p>
  </div>
</section>
    
    <section className="past-workshops-section">
  <div className="pw-header">
    <button className="pw-tag">Our Journey</button>
    <h2 className="pw-title">Past Workshops</h2>
    <p className="pw-subtitle">
      Explore our timeline of impactful workshops that have transformed hundreds of learners
    </p>
  </div>

  <div className="pw-timeline">

    {/* --- Card 1 (Left) --- */}
    <div className="pw-row left">
      <div className="pw-card">
        <img
          src="https://images.pexels.com/photos/3862636/pexels-photo-3862636.jpeg"
          className="pw-img"
          alt="Workshop"
        />
        <div className="pw-content">
          <h3 className="pw-card-title">AI & Machine Learning Bootcamp</h3>
          <p className="pw-card-text">
            Introduction to Neural Networks & Deep Learning.
          </p>
          <div className="pw-info">
            <span>📅 November 2024</span>
            <span>📍 Tech Hub</span>
            <span>👥 85+</span>
          </div>
        </div>
      </div>
    </div>

    {/* Timeline Dot */}
    <div className="pw-dot"></div>

    {/* --- Card 2 (Right) --- */}
    <div className="pw-row right">
      <div className="pw-card">
        <img
          src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
          className="pw-img"
          alt="Workshop"
        />
        <div className="pw-content">
          <h3 className="pw-card-title">Robotics Workshop Series</h3>
          <p className="pw-card-text">
            Building Autonomous Robots with Microcontrollers.
          </p>
          <div className="pw-info">
            <span>📅 October 2024</span>
            <span>📍 Innovation Center</span>
            <span>👥 65+</span>
          </div>
        </div>
      </div>
    </div>

    {/* Timeline Dot */}
    <div className="pw-dot"></div>
    
    <div className="pw-row left">
      <div className="pw-card">
        <img
          src="https://images.pexels.com/photos/3862636/pexels-photo-3862636.jpeg"
          className="pw-img"
          alt="Workshop"
        />
        <div className="pw-content">
          <h3 className="pw-card-title">AI & Machine Learning Bootcamp</h3>
          <p className="pw-card-text">
            Introduction to Neural Networks & Deep Learning.
          </p>
          <div className="pw-info">
            <span>📅 November 2024</span>
            <span>📍 Tech Hub</span>
            <span>👥 85+</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
<Gallery />
<Footer />
</>
  );
};

export default Workshop;
