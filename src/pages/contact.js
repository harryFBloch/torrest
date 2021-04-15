import React from 'react';
import { withRouter } from 'react-router';
import {ReactComponent as Mail} from '../images/icons/mail.svg';

import './page.css';


const contact = (props) => {
  return (
    <div className="center-page">
      <div>
        <div className="container">
          <button className="nav-button" onClick={() => props.history.goBack()}>Back</button>
        </div>
      </div>

      <div>
          <h2 className="title">Contact</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet.</p>
      </div>

      <div className="container">
      <a href="mailto:Info@torrestmusic.com" className="nonlink">
        <button className="nav-button icon-button">
          <Mail className="small-icon"/>
          Info@torrestmusic.com
        </button>
      </a>
      </div>
    </div>
  )
}

export default withRouter(contact);