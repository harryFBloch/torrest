import React from 'react';
import './page.css';
import { useNavigate } from 'react-router-dom';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Subscribe = () => {
  const navigate = useNavigate();
  const url = "https://torrest.us1.list-manage.com/subscribe/post?u=YOUR_MAILCHIMP_U&id=YOUR_MAILCHIMP_ID";

  return (
    <div className="page-container">
      <div className="center-page">
        <div className="container">
          <button className="nav-button" onClick={() => navigate(-1)}>Back</button>
        </div>
        <h2 className="title">Subscribe</h2>
        <p>Stay updated with our latest events and news!</p>
        <div className="chimpContainer">
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  subscribe({
                    EMAIL: e.target.email.value
                  });
                }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </form>
                {status === "sending" && <div>Subscribing...</div>}
                {status === "error" && <div dangerouslySetInnerHTML={{ __html: message }} />}
                {status === "success" && <div>Subscribed!</div>}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;