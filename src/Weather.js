import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayTemperature(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=97c2f6a3b34509ac62090edc5d18d949&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

  return <h2>Hello from Weather</h2>;
}
