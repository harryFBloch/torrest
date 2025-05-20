import React, {ReactElement} from 'react';
import { withRouter } from 'react-router';
import Logo from '../images/logo/WhiteDiamond.png';
import { ICONS } from '../ICONS';
import './Home.css';

const Home = (props) => {

  const renderNavButton = (page, text, link) => (
    <button className="nav-button" onClick={() => props.history.push(`/${page}`)}>
      {text}
    </button>
  )

  const renderSocialIcon = (path, url) => (
    <a className="icon-link" target="_blank" rel="noopener noreferrer" href={url}>
      <svg className="social-icon" viewBox="0 0 24 24">
        <path d={path}/>
      </svg>
    </a>
  )

  return (
    <div className="home-page-cantainer">
      <div className="nav-container">
        <div className="image-conatiner">
          <img src={Logo} className="home-logo"/>
        </div>
        <div className="buttons-container">
          {renderNavButton('subscribe', "Join Us")}
          {renderNavButton('about', "About")}
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC9xloc0P5Qf5FSCrZ7oEmJQ">
            <button className="nav-button">
                Our Videos
            </button>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TorrestMusic/events/">
            <button className="nav-button">
              Events
            </button>
          </a>
          {renderNavButton('contact', "Contact Us")}
        </div>
        <div className='social-icon-container'>
          {renderSocialIcon(ICONS.youtube, "https://www.youtube.com/channel/UC9xloc0P5Qf5FSCrZ7oEmJQ")}
          {renderSocialIcon(ICONS.instagram, "https://www.instagram.com/torrestmusic/")}
          {renderSocialIcon(ICONS.facebook, "https://www.facebook.com/TorrestMusic")}
        </div>
      </div>
    </div>
  )
}

export default withRouter(Home);