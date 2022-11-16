import React from "react";
import Weather from "./Weather";
import App from "../App";

function BackgroundImage({weather}) {
  let id = '';
  if (!Array.isArray(weather.icon)) {
    id = weather.icon;
    console.log(id)
  }
  function getImageUrl() {
    // id classification https://openweathermap.org/weather-conditions
    if (id == '01d') {
      return <img style={{width: '150px'}} src='http://openweathermap.org/img/wn/01d@2x.png' alt=""/>; 
    } else if (id == '02d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/02d@2x.png' alt=""/>; 
    } else if (id == '03d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/03d@2x.png' alt=""/>; 
    } else if (id == '04d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/04d@2x.png' alt=""/>; 
    } else if (id == '05d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/05d@2x.png' alt=""/>; 
    } else if (id == '06d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/06d@2x.png' alt=""/>; 
    } else if (id == '07d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/07d@2x.png' alt=""/>; 
    } else if (id == '08d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/08d@2x.png' alt=""/>; 
    } else if (id == '09d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/09d@2x.png' alt=""/>; 
    } else if (id == '10d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/10d@2x.png' alt=""/>; 
    } else if (id == '11d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/11d@2x.png' alt=""/>; 
    } else if (id == '12d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/12d@2x.png' alt=""/>; 
    } else if (id == '13d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/13d@2x.png' alt=""/>; 
    } else if (id == '01n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/01n@2x.png' alt=""/>; 
    } else if (id == '02n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/02n@2x.png' alt=""/>; 
    } else if (id == '03n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/03n@2x.png' alt=""/>; 
    } else if (id == '04n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/04n@2x.png' alt=""/>; 
    } else if (id == '05n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/05n@2x.png' alt=""/>; 
    } else if (id == '06n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/06n@2x.png' alt=""/>; 
    } else if (id == '07n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/07n@2x.png' alt=""/>; 
    } else if (id == '08n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/08n@2x.png' alt=""/>; 
    } else if (id == '09n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/09n@2x.png' alt=""/>; 
    } else if (id == '10n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/10n@2x.png' alt=""/>; 
    } else if (id == '11n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/11n@2x.png' alt=""/>; 
    } else if (id == '12n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/12n@2x.png' alt=""/>; 
    } else if (id == '13n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/13n@2x.png' alt=""/>; 
    } else if (id == '50d') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/50d@2x.png' alt=""/>; 
    } else if (id == '50n') {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/50n@2x.png' alt=""/>; 
    }


     else {
      return <img style={{width: '150px', height: '150px'}} src='http://openweathermap.org/img/wn/01d@2x.png' alt=""/>; 
    }
    
  }
  console.log(getImageUrl(id))

  return (id && getImageUrl());
}

export default BackgroundImage;

