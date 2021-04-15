import React from 'react';
import './page.css';

import {ReactComponent as Microphone} from '../images/icons/microphone.svg';
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Facilisis gravida neque convallis a.</p>
        </div>
      </div>

      <div>
        <div className="space-container">
          <div className="about-info">
            <div className="container">
              <Microphone className="about-icon"/>
            </div>
            <p>Volutpat odio facilisis mauris sit amet. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Odio eu feugiat pretium nibh ipsum consequat.</p>
          </div>
          <div className="line"></div>

          <div className="about-info">
            <div className="container">
              <Speaker className="about-icon"/>
            </div>
            <p>Volutpat odio facilisis mauris sit amet. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Odio eu feugiat pretium nibh ipsum consequat.</p>
          </div>
          <div className="line"></div>

          <div className="about-info">
            <div className="container">
              <Camera className="about-icon"/>
            </div>
            <p>Volutpat odio facilisis mauris sit amet. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Odio eu feugiat pretium nibh ipsum consequat.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default withRouter(about);