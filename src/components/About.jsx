// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am a photographer based in Mendoza, Argentina, with experience in studio, outdoor, conceptual, social, and lifestyle photography. 
        I am passionate about capturing unique moments and telling stories through my images. 
        Every session is an opportunity to explore creativity and connect with my clients, always seeking the best way to reflect their essence.
      </p>
      <a href="https://www.instagram.com/mariano_el_fotografo/" target="_blank" rel="noopener noreferrer">
        <button className="instagram-button">
          <i className="fa fa-instagram" aria-hidden="true"></i> {/* Ícono de Instagram */}
            Take a look in Instagram
        </button>
      </a>
    </section>
  );
};

export default About;
