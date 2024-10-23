// src/components/ContactBanner.js
import React from 'react';

const ContactBanner = () => {
  return (
    <div className="contact-banner" id="contact">
      <div className="banner-content">
        <h2>Let's have a talk</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactBanner;
