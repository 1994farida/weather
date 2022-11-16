import React from "react";
// import App from "../App";
import Form from "./Form";
import Weather from "./Weather";
import App from "../App";
 

const Temp2 = ({weather}) => {

    // const value1 = <p>{weather.temp}</p>;
    // const value2 = '{temp}';
    // console.log(value1)

    // function chengeSelect(e) {
    //     value1(e.target.value);
    //     value2(e.target.value)
    //  }

     return (
        <div className="sel">
      <select className="temp2" >
         <option className="temp3"><p className="temp3">Temperature in Celsius: {weather.temp}°C</p></option>
         <option className="temp3"><p className="temp3">Temperature in fahrenheit: {(weather.temp * 9/5) + 32}℉</p></option>
      </select>
      {/* <p >
         {value1 && value2}
         {value == 'cat' && 'Вы выбрали Кота'}
         {value == 'cheese' && 'Вы выбрали Сыр'}
         {value == 'milk' && 'Вы выбрали Молоко'}
      </p> */}
   </div>
     )
    


}

export default Temp2;