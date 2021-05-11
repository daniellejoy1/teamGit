import React from 'react'; 
import {
    Route, 
    Link, 
    Switch
} from 'react-router-dom'

//Once code has been merged and the 'Nasa' and 'Weather' files have been added, we should be able to uncomment those imports and routes below for them to work. 

import Home from './Home'
import Nasa from '../components/nasa/nasa';
import Weather from '../components/weather/weather';
import YelpFood from '../components/yelp/Yelp';
// import GeoLocate from './geoLocate/GeoLocate';


const Side = () => {
    return (
        <div className="side">
            <div className="side-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nasa">Nasa</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                    <li><Link to="/yelp">Yelp</Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/nasa"><Nasa /></Route>
                    <Route exact path="/weather"><Weather /></Route>
                    <Route exact path="/yelp"><YelpFood /></Route>
                </Switch>
            </div>
        </div>
    ); 
}; 

export default Side; 