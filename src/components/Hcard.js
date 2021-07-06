import React from "react";

export default function Card({title,value,unit}){  

    return(
        <div>
<div className="card" style={{border:"none",padding:"1em", width:"15rem",height:"10rem" , margin: "2px"}}>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{`${value} ${unit}`}</p>
  </div>
</div>
        </div>
    )
}