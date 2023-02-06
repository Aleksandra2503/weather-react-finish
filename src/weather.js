import React from "react";
import axios from 'axios';
import { MutatingDots } from  'react-loader-spinner';

export default function Weather(props) {

    function handleResponse (response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }
    let apiKey = "6f2c8d8e771e0ede0a15520e397b527c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
        <MutatingDots 
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor= '#4fa94d'
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
       
            
          );

   <h2>HELLO</h2>
}