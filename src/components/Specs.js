import React from "react";
import Card from "./Card";
import "./specs.css"
import Hcard from "./Hcard"
export default function Specs({data}){
    const {consolidated_weather}=data;
    let ar=[],ar2=[];
    let now;
    if(consolidated_weather!==undefined) {
        consolidated_weather.map((cur,ind)=>{
            let {weather_state_name,min_temp,
                applicable_date,
                max_temp,}=cur
                if(ind==1)applicable_date="Tommorow"
            if(ind>=1){
                ar.push(<Card 
                    date={applicable_date}
                    weather={weather_state_name}
                    max_temp={max_temp.toPrecision(3)}
                    min_temp={min_temp.toPrecision(3)}
                    />) 
            }

        } )
       ar2.push(consolidated_weather[0].wind_speed.toPrecision(2))
       ar2.push(consolidated_weather[0].air_pressure)  
       ar2.push(consolidated_weather[0].humidity)  
       ar2.push(consolidated_weather[0].visibility.toPrecision(2))
    }
    if(ar2.length!==0){
        now=
        <div>
            <h2 className="center">Today's Highlight</h2>
        <div className="center">
       <Hcard title="Wind Status" value={ar2[0]} unit="mph"/>
        <Hcard title="Air Pressure" value={ar2[1]} unit="mb"/>
        <Hcard title="Visibility" value={ar2[2]} unit="miles"/>
        <Hcard title="Humidity" value={ar2[3]} unit="%"/>
        </div>
        </div>
           
        
    }
    return (
        <div>
            <div className="cards">
                {ar.map((cur)=>{return cur;})}
            </div>
           
            {now}
           
        </div>
    )
 }