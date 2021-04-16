import React from 'react';
import { withRouter } from 'react-router';
import MailChimp from '../components/mailChimp';
import './page.css';

const subscribe = (props) => {
  return (
    <div className="center-page">
      <div>
        <div className="container">
          <button className="nav-button" onClick={() => props.history.goBack()}>Back</button>
        </div>
      </div>

      <div>
          <h2 className="title">Joins Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet.</p>
      </div>


      <div className="chimpContainer">
        < MailChimp />
      </div>
    </div>
    
  )
}

export default withRouter(subscribe);