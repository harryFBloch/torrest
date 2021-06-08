import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import BackgroundSlider from 'react-background-slider'

import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Subscribe from './pages/subscribe';
import Events from './pages/events';
import Videos from './pages/videos';

import './App.css';

function App() {

  const [images, setImages] = useState([])

  useEffect(() => {
    let newImages = []
    for(let i = 0; i <= 10; i++){
      const newImage = `https://backgroundphotos.s3.us-east-2.amazonaws.com/photos/${i}.jpg`
      newImages.push(newImage);
    }
    setImages(newImages); 
  }, [])

  return (
    <Router>
      <BackgroundSlider
      images={images}
      duration={5} transition={2} className='zlider'/>
      <div className="App">
          <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
          >
     
            <Route path="/subscribe">
              <Subscribe />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/videos" component={Videos}/>
            <Route component={Home} />
          </AnimatedSwitch>
      </div>
    </Router>
  );
}

export default App;
