import React from 'react';
import './page.css';

import {ReactComponent as Live} from '../images/icons/live.svg';
import {ReactComponent as Speaker} from '../images/icons/speaker.svg';
import {ReactComponent as Camera} from '../images/icons/camera.svg';
import { withRouter } from 'react-router';

const about = (props) => {
  return (
    <div className="page-container">
      <div>
        <div className="container">
          <button className="nav-button" onClick={() => props.history.goBack()}>Back</button>
        </div>

        <div>
          <h2 className="title">About Us</h2>
          <p>Torrest is a video and event management company that produces unique musical experiences by organizing, filming, and broadcasting concerts in urban and rural environments.</p>
        </div>
      </div>

      <div>
        <div className="space-container">
          <div className="about-info">
            <div className="container">
              <Speaker className="about-icon"/>
            </div>
            <p>Torrest was created by musicians - for everyone who loves music. We strive to create live music events that transport you away from your everyday life and help you to become lost in the music.</p>
          </div>
          <div className="line"></div>

          <div className="about-info">
            <div className="container">
              <Camera className="about-icon"/>
            </div>
            <p>Torrest produces unique performances in carefully picked locations using multiple cameras and drones to bring you a truly special visual experience coupled with artists that deserve more attention.</p>
          </div>
          <div className="line"></div>

          <div className="about-info">
            <div className="container">
              <Live className="about-icon"/>
            </div>
            <p>Torrest live streams performances so that you can enjoy them from anywhere in the world.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default withRouter(about);