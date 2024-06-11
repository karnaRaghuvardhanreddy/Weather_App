import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:24.04,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze"
    })
    let updateInfo=(res)=>{
        setWeatherInfo(res);
    }
    return (
        <div style={{display:"grid",placeItems:"center"}}>
            <div style={{textAlign:"center"}}>
                <h2>Weather App</h2>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info1={weatherInfo}/>
            </div>
        </div>
        );
}

