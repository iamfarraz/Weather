import React from "react";
import Select from 'react-select'
import Today from "./Today"
import "./Weather.css"
import opt from "./location";

const options = []
opt.map((cur)=>{
  return options.push({value:cur,label:cur})
})

export default function Weather({setloc,data}){
  console.log(data)
   
    const handleChange=((e)=>{
          setloc(e.value)
    })
   return (
      <div>    
         <div  className="search" >
         <Select 
         defaultValue={{ label: "New Delhi", value:"New Delhi" }}
          onChange={handleChange}
         options={options} />
         </div>
     <Today data={data}  />
       </div>
   )
}