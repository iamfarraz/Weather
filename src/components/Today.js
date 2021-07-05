import React from "react";
import "./Weather.css"
import Card from "./Card"
export default function Today({data}){   
   
  let now;
    const {consolidated_weather}=data
   if(consolidated_weather!==undefined) {
  console.log(consolidated_weather)
   const {weather_state_name,
    the_temp,min_temp,
    max_temp,}=consolidated_weather[0]; 
      now= ( 
        <div class="card" style={{border:"none" }}>
          <div class="card-body">
          <h2 class="card-title heading">Today</h2>
          <h3 class="heading card-subtitle mb-2 text-muted">{weather_state_name}</h3>
          <p class="heading card-text">{`${the_temp.toPrecision(3)}°c`}</p>
          <p class="heading card-text">{`${max_temp.toPrecision(3)}°c      ${min_temp.toPrecision(3)}°c`}</p>
          </div>
       </div>
       )
    
   }
   return (
       <div>{now}</div>
   )
 }