import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";
import "./nasa.css";
import placeholdImg from "./assets/map-icon-2.png";

const baseNASA_URL = "https://api.nasa.gov/planetary/earth/imagery";
const api_key = "vtMREx6SWfLJaDo3mHjInRqAjCfYLIAkR3jfQsBc";

const NASA = () => {
  const [NASAData, setNASAData] = useState(placeholdImg);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  // const [geolocationAvailable, setGeolocationAvailable] = useState(true);

  useEffect(() => {
    geoLocation();
  }, []);

  const geoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
      // setGeolocationAvailable(false);
    }
  };

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };


  const fetchNASA = () => {
    let url = `${baseNASA_URL}?lon=${longitude}&lat=${latitude}&date=2018-01-01&dim=0.15&api_key=${api_key}`;
    // let url = "https://api.nasa.gov/planetary/earth/imagery?lon=-97.37&lat=32.91&date=2018-01-01&dim=0.15&api_key=vtMREx6SWfLJaDo3mHjInRqAjCfYLIAkR3jfQsBc"
    fetch(url)
      .then((res) => res.blob())
      .then((photo) => {
        let photoURL = URL.createObjectURL(photo);
        setNASAData(photoURL);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchNASA();
  });

  return (
    <Col className="p-2" md="auto">
      <img className="locImg" src={NASAData} alt="map of your area" />
    </Col>
  );
};

export default NASA;
