import React from 'react';
import './page.css';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as Speaker} from '../images/icons/speaker.svg';

//lets add a comment here

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="center-page">
        <div className="container">
          <button className="nav-button" onClick={() => navigate(-1)}>Back</button>
        </div>
        <h2 className="title">About Us</h2>
        <p className="about-description">
          Torrest is an event management company that produces unique musical experiences by organizing concerts in urban and rural environments.
        </p>

        <div className="about-info-container">
          <div className="about-info">
            <div className="container">
              <Speaker className="about-icon"/>
            </div>
            <p>
              Torrest was created by musicians - for everyone who loves music. We strive to create live music events that transport you away from your everyday life and help you to become lost in the music.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;