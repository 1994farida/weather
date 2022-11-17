import './App.css';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';
import React from 'react';
import { useState } from 'react';
import BackgroundImage from './components/BackgroundImage';
// import Temp from './components/Temp';
import Temp2 from './components/Temp2';




function App() {

  const [weather, setWeather] = useState([]);
  const API_KEY = '794f057ed2516163c53a51b07b87b66c';
  // const [date, setDate] = useState([]);
//   const [value, setValue] = useState('');

//   function chengeSelect(e) {
//     setValue(value);
//  }
  // const [input, setInput] = useState([]);
  // setInput('')
  

  async function fetchData(e) {

    // const date = new Date();
    
    
    
    const city = e.target.elements.city.value;
    e.preventDefault('');
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
      .then( res => res.json())
      .then(data => data); 
    
      // const temp = () => {apiData.main ? {apiData.main.temp} : null};
      
      setWeather({
        data: apiData,
        name: apiData.name,
        description: apiData.weather[0].description,
        temp: Math.round(apiData.main.temp - 273,15),
        // temp: apiData.main.temp,
        humidity: apiData.main.humidity,
        speed: apiData.wind.speed,
        icon: apiData.weather[0].icon,
        error:"",
        date: new Date(apiData.dt * 1000).toLocaleDateString("default"),
        time: new Date(apiData.dt * 1000).toLocaleTimeString("default")

        
        
      })

      // setDate ({

      //   dateA: new Date()
        
        // const hours = date.getHours()
        // let timeOfDay
        // const styles = {
        // fontSize: 30
        // }
        // if (hours < 12) {
        // timeOfDay = "morning"
        // styles.color = "#04756F"
        // } else if (hours >= 12 && hours < 17) {
        // timeOfDay = "afternoon"
        // styles.color = "#2E0927"
        // } else {
        // timeOfDay = "night"
        // styles.color = "#D90000"
        // }
      // })
      // console.log(date)
      

      // let date = new Date()
      

    }
    

    return (
      <div className="App">
      {/* <div className='Container' style={{
            backgroundImage: `url(${
              weather ? BackgroundImage(weather) : LakeBackground
            })`,
          }}> */}
      <div className='container'>
      <div className='top'>
      
          <Info/>
          <Form getWeather={fetchData}/>
          <div className='img'>
          <Temp2 weather={weather}/>
          {/* <Temp weather={weather}/> */}
          <BackgroundImage weather={weather}/>
          </div>
          <div className='bottom'>
          {(typeof weather != 'undefined') ? (
          <Weather weather={weather}/>): (
          <div>X</div>
          )}
          {/* {console.log('-----')}
          {console.log(date)} */}
        {console.log(weather.data)}
      </div>
      </div>
      </div>
      </div>
    );

  }

export default App;
