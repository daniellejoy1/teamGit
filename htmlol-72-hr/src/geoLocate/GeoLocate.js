import React from "react";


  const GetLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });

  
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }

export default GetLocation