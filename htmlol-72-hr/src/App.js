import React from 'react';

import {
  BrowserRouter as Router, 
} from 'react-router-dom';
// import ReactDOM from 'react-dom';

import './App.css';


import Header from './site/Header';
import Side from './site/Side';

//PUTTING THESE LINKS IN THE SIDE FILE instead to route them from the sidebar view - once the 'Nasa' and 'Weather' files have been added, we should be able to uncomment them in the SIDE FILE for them to work. 

// import Home from './site/Home';
// import Nasa from './components/nasa/nasa';
// import Weather from './components/weather/weather';
// import GeoLocate from './geoLocate/GeoLocate';
// import YelpFood from './components/yelp/Yelp';


function App() {
  return (
    <div>
      <Header /> 
        <Router>
          <Side />
          {/* <Home />
          <GeoLocate /> */}
          {/* <Nasa />
          <Weather /> */}
          {/* <YelpFood /> */}
        </Router>
    </div>
  );
}

export default App;
