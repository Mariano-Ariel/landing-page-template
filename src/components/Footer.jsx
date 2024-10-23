// src/components/Footer.js
import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Importa el ícono de LinkedIn

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Legacy of Light. All rights reserved.</p>
      <p>
        <a href="https://www.linkedin.com/in/mariano-rodriguez-dev" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px' }}>
          <FaLinkedin style={{ color: 'white', fontSize: '20px' }} />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
