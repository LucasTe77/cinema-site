import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // Importando ícones do react-icons
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Entre em Contato</h1>
      <p>Converse com a gente nas redes sociais ou pelo WhatsApp!</p>

      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook size={40} color="#4267B2" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram size={40} color="#E1306C" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter size={40} color="#1DA1F2" />
        </a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsapp size={40} color="#25D366" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
