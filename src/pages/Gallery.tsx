import React from "react";
import "./Gallery.css";

const Gallery: React.FC = () => {
  const images = [
    require("../img/client5.jpeg"),
    require("../img/client5.jpeg"),
    require("../img/client5.jpeg"),
    require("../img/client5.jpeg"),
    require("../img/client5.jpeg"),
    require("../img/client5.jpeg"),
    require("../img/client5.jpeg"),
    require("../img/client5.jpeg"),
  ];

  return (
    <section className="workshop-gallery">
      <div className="gallery-header">
        <span className="tag">Moments Captured</span>
        <h2 className="gallery-title">
          Workshop <span>Gallery</span>
        </h2>
        <p className="gallery-subtitle">
          Glimpses from our workshops showcasing learning, collaboration, and
          innovation in action.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-card">
            <img src={src} alt={`Workshop ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
