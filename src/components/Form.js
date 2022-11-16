import React from "react";
import App from "../App";
import Info from "./Info";

const Form = (props) =>{
  // const onClear = (props) => {
  //   if (props.value === '') {
  //     loadMoviesDefault();
  //   }
  // };
  

  return (
    // onSubmit={props.fetchData}
    <form className="head" onSubmit={props.getWeather}>
        <input className="input" type='text' name="city" placeholder="Город"/>
        <button className="button">Get</button>
    </form>
  );
}

export default Form;




