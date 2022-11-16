import React, { useState } from "react";
import App from "../App";
// import Weather from "./weather";

function Temp({weather}) {
    let tempFah = "";
    if (!Array.isArray(weather.temp)) {
        tempFah = weather.temp;
        console.log(tempFah)
    }
    function handleClick(e) {
        e.preventDefault();
        tempFah = 'y';
        return (<p>Температура: {tempFah}</p>);
        // f: (weather.temp * 9/5) + 32
        // f: 'X'
        // });
    }
    return (
        <form>
            <button className="temp" onClick={handleClick}>Температура: °C</button>
            <p>Температура: {tempFah}</p>
        </form>
    );

    // let fah = '';
    // if (!Array.isArray(weather.temp)) {
    //     fah = (weather.temp * 9/5) + 32;
    // function handleChange(e) {
    //     if ()
    // }
}

export default Temp;