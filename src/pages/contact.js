import React from 'react';
import './page.css';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as Mail} from '../images/icons/mail.svg';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="center-page">
        <button className="nav-button" onClick={() => navigate(-1)}>Back</button>
        
        <div className="contact-content">
          <h2 className="title">Contact Us</h2>
          <p className="contact-text">For any inquiries, please email us at:</p>
          
          <a href="mailto:info@torrestmusic.com" className="email-link">
            <button className="nav-button icon-button">
              <Mail className="small-icon"/>
              info@torrestmusic.com
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;