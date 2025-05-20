import React from 'react';
import { withRouter } from 'react-router';
import MailChimp from '../components/mailChimp';
import './page.css';

const subscribe = (props) => {
  return (
    <div className="center-page">
      
        <div className="container">
          <button className="nav-button" onClick={() => props.history.goBack()}>Back</button>
        </div>
      

      <div>
          <h2 className="title">Join Us</h2>
          <p>Add your email below to join our mailing list and always be notified of our upcoming live events, live streams and the release of our full set videos!</p>
      </div>


      <div className="chimpContainer">
        < MailChimp />
      </div>
      <div>
        <p>Join our Torrests private Facebook group to interact with other fans and to always be in the know</p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/484833792566059">
          <button className="nav-button">BECOME A TORRESTS MEMBER</button>
        </a>
      </div>
    </div>
    
  )
}

export default withRouter(subscribe);