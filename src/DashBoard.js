import React,{ useState,useEffect } from "react";
import Weather from "./components/Weather"
import Specs from "./components/Specs"
import "./DashBoard.css"
import axios from "axios";

 function DashBoard(){
     const [loc,setloc]=useState("New Delhi");
     const [data,setdata]=useState({});
    
     const fet=((loc)=>{
      axios({
        method: 'GET', //you can set what request you want to be
        url: `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${loc}`,
        headers: {
          origin:"x-requested-with "
        }
      })
     .then((res)=>{
            axios({
            method: 'GET', //you can set what request you want to be
            url:`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${res.data[0].woeid}/`,
            headers: {
              origin:"x-requested-with "
            }
            })
           .then(res=>setdata(res.data))
           .catch(err=>console.error(err)) 
         })
      .catch(err=>console.error(err))
      })

    useEffect(()=>{
        fet(loc);
    },[loc])

    return (
        <div>
          <h1 className="heading" >{data.title}</h1>
         <div className="wrapper">  
           <div className="weather">
           <Weather  setloc={setloc} data={data} />
           </div>
           <div className="specs">
           <Specs data={data} />
           </div>

       </div>
        </div>
        
       
    )
}
export default DashBoard;