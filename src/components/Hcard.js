import React from "react";

export default function Card({title,value,unit}){  

    return(
        <div>
<div class="card" style={{border:"none",padding:"1em", width:"15rem",height:"10rem" , margin: "2px"}}>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{`${value} ${unit}`}</p>
  </div>
</div>
        </div>
    )
}