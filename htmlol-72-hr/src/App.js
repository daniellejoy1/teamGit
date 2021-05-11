import React from 'react';
// import ReactDOM from 'react-dom';
import GeoLocate from './geoLocate/GeoLocate';
import Weather from './components/weather/weather';
import './App.css';


function App() {
  return (
    <div className="App">
      <GeoLocate/>
      <Weather/>
    </div>
  );
}

export default App;
