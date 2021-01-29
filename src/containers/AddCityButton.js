import React,{useContext, useState} from "react";
import { WeatherContext } from "../context/WeatherContext";

// const apiKey = "2082573baa2c88e4ee84edd0044c8192";
// const forecastUrl = "";

const AddCityButton = () => {
const {addCity} = useContext(WeatherContext);
const [name,setName] = useState('');



const handleSubmit = (e) => {
const apiKey='9c7c6bb649f116a9ba16f7930b195075'
let urltoFetch = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${name}` 

console.log(urltoFetch)
  const url = urltoFetch
  fetch(url)
      .then(res => res.json())
      .then((data) => {
        addCity(name,data.current.temperature);
        setName('');
      })
   
  // e.preventDefault();
  
}
    return (
      <div className="add-city-form">
        
        <input className="input" onChange={(e)=>setName(e.target.value)} value={name}/>
        <button className="input" onClick={handleSubmit}>Add</button>
        
      </div>
    );
  };

  export default AddCityButton;
