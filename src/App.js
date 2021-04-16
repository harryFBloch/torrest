import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Subscribe from './pages/subscribe';
import Events from './pages/events';
import Videos from './pages/videos';

import './App.css';

function App() {

  return (
    <Router>
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
