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
          <p>To work with us in any capacity or to join our team, send us an email! We love hearing from you!</p>
      </div>

      <div className="container top-margin">
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