import React from "react";
import "./Weather.css"
export default function Today({data}){   
   
  let now;
    const {consolidated_weather}=data
   if(consolidated_weather!==undefined) {
  console.log(consolidated_weather)
   const {weather_state_name,
    the_temp,min_temp,
    max_temp,}=consolidated_weather[0]; 
      now= ( 
        <div className="card" style={{border:"none" }}>
          <div className="card-body">
          <h2 className="card-title heading">Today</h2>
          <h3 className="heading card-subtitle mb-2 text-muted">{weather_state_name}</h3>
          <p className="heading card-text">{`${the_temp.toPrecision(3)}°c`}</p>
          <p className="heading card-text">{`${max_temp.toPrecision(3)}°c      ${min_temp.toPrecision(3)}°c`}</p>
          </div>
       </div>
       )
    
   }
   return (
       <div>{now}</div>
   )
 }