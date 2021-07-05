import React from "react";

export default function Card({date,weather,max_temp,min_temp}){  

    return(
        <div>
<div class="card" style={{padding:"1em", width:"12rem" , margin: "1px",border:"none"}}>
  <div class="card-body">
    <h5 class="card-title">{date}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{weather}</h6>
    <p class="card-text">{`${max_temp}°c   ${min_temp}°c`}</p>
  </div>
</div>
        </div>
    )

}