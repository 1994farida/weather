import React from "react";
import App from "../App";
import Info from "./Info";
import Form from "./Form";

const Weather = ({weather}) => {
  
  return (
  <div className="c">
  <p className="date">Date: {weather.date} {weather.time}</p>
  <p className="name">City: {weather.name}</p>
  {/* <p className="temp">Температура: {weather.temp}°C</p> */}
  <p className="hum">Humidity: {weather.humidity}%</p>
  <p className="speed">Speed: {weather.speed}м/с</p>
  <p className="des">Description: {weather.description}</p>
 
  {/* {console.log('Render')} */}
  </div>
  );
}

export default Weather;

