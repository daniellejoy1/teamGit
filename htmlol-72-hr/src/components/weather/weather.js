import React, { Component } from 'react';
import './weather.css'
import moment from 'moment';
// import { useEffect, useState } from "react";
// import GeoLocate from "../../geoLocate/GeoLocate";

// const apiKey = '8ab7e0368b9d6e44b1351df09d533663';
class Weather extends Component {
state = {
    lat: undefined,
    lon: undefined,
    city: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    icon: undefined,
    sunrise: undefined,
    sunset: undefined,
    errorMessage: undefined,
  }
// const Weather = () => {
    // const lat = navigator.geolocation.getCurrentPosition(function(position) { return position.coords.latitude;});
    // const lon = navigator.geolocation.getCurrentPosition(function(position) { return position.coords.longitude}
    // );

    getPosition = () => {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

      getWeather = async (latitude, longitude) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8ab7e0368b9d6e44b1351df09d533663&units=metric`);
        const data = await response.json();
        this.setState({
            lat: latitude,
            lon: longitude,
            city: data.name,
            temperatureC: Math.round(data.main.temp),
            temperatureF: Math.round(data.main.temp * 1.8 + 32),
            icon: data.weather[0].icon,
            sunrise: moment.unix(data.sys.sunrise).format("hh:mm a"),
            sunset: moment.unix(data.sys.sunset).format("hh:mm a"),
        })
        console.log('data is: ', data);  
      
    };

      componentDidMount(){
        this.getPosition()
        .then((position) => {
           this.getWeather(position.coords.latitude,     
           position.coords.longitude)
         })
         .catch((err) => {
             this.setState({ errorMessage: err.message })
         })

         this.timerID = setInterval(
             () =>
             this.getWeather(this.state.lat, this.state.lon),
             60000
         )
        }
        componentWillUnmount() {
            clearInterval(this.timerID)
        }
        render() {
            const {city, temperatureC, temperatureF, icon, sunrise, sunset} = this.state;
            if (city) {
                return(
                <div className = "main">
                    <div className = "weather-box">
                        <div className = "weather-item">{city}</div>
                        <div className = "weather-item">{temperatureC} &deg;C <span className="slash">/</span> {temperatureF} &deg;F</div>
                        <div className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon"></div>
                        <div className="weather-item">
                            <span>Sunrise:{sunrise}</span>
                            </div>
                        <div className="weather-item">
                            <span>Sunset:{sunset}</span>
                        </div>
                </div>
                </div>
                )
            }
                else {
                    return (
                        <div>Loading...</div>
                    )
                }
            }
        }

        export default Weather;

// import React from 'react';
// import { useEffect, useState } from "react";
// import Swiper from 'swiper';

// const API_KEY = '8ab7e0368b9d6e44b1351df09d533663';

// const usePosition = () => {
//     const [error, setError] = useState(null);
//   const [position, setPosition] = useState();

//   useEffect(() => {
//     const geo = navigator.geolocation;
//         if(!geo) {
//             setError('Geolocation is not supported.');
//             return;
//         }

//         const handleSuccess = position => {
//             const { latitude, longitude } = position.coords;
//             setPosition({
//                 latitude,
//                 longitude
//             });
//         };

//         const handleError = error => {
//             setError(error.message);
//         };

//         geo.getCurrentPosition(handleSuccess, handleError);

//     }, []);

//     return { position, error };
// }


// function Weather() {
//   const {position, error} = usePosition();
//   const [weather, setWeather] = useState([]);

//   useEffect(() => {
//     if(position) {
//       const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.latitude}&lon=${position.longitude}&exclude=current,minutely,daily&units=metric&lang=pl&appid=${API_KEY}`;

//       const fetchData = async () => {
//         const result = await fetch(URL)
//           .then(res => res.json())
//           .then(data => data);
//         setWeather(result.hourly);  
//       }
//       fetchData();
//     } else {
//       console.log('no position');
//     }
//   }, [position, error]);

//   return (
//       <div className="App">
//         <div>
//           <Swiper weather={weather}/>
//         </div>
//       </div>
//     )
// }

// export default Weather;