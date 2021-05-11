import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Search from './Search';

const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete';

// "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

const YELP_KEY = process.env.REACT_APP_YELP_KEY;

const YelpFood = () => {
    const [word, setWord] = useState(''); 
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);


    fetch(`${baseURL}?text=${word}&latitude=${lat}&longitude=${lng}`, {
      method: 'GET',
      referrerPolicy: "unsafe-url", 
      mode: 'no-cors',
      headers: {
          "Authorization": `Bearer ${YELP_KEY}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "no-cors", 
          'X-Requested-With': 'XMLHttpRequest',
          // 'Accept': 'application/json, text/plain, */*',          
      },
    })
    .then((res) => res.json())
    .then(data => {
      console.log(data);
    })
    .catch((err) => console.log(err));
  };


  const getLocation = () => {
    if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
    } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
    }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  
  return (
    <div className="main">
      <h2>Find Restaurants Near You!</h2>
      <p><b>Confirm location:</b></p>
      <Button color='secondary' onClick={getLocation}>Get Location</Button>
      
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
      <br />
      <h4>What are you craving?</h4>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
      {/* <button onClick={getRestaurants}>Get Restaurants Near You!</button> */}
    </div>
  );
};


export default YelpFood;

