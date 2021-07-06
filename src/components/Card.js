import React from "react";

export default function Card({date,weather,max_temp,min_temp}){  

    return(
        <div>
<div className="card" style={{padding:"1em", width:"12rem" , margin: "1px",border:"none"}}>
  <div className="card-body">
    <h5 className="card-title">{date}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{weather}</h6>
    <p className="card-text">{`${max_temp}°c   ${min_temp}°c`}</p>
  </div>
</div>
        </div>
    )

}