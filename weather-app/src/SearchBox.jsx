import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError]=useState(false);
    const API_KEY = "d512a11e089f35b13224f87a9253b4a5";
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";

    const getWeatherInfo = async () => {
        try{
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const jsonresponse = await response.json();
        let result={
            city:city,
            temp:jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelsLike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description

        };
        return result;
    }
    catch(err){
        setError(true)
        throw err;
    }
}



    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            let information=await getWeatherInfo()
            setCity("")
            updateInfo(information);
        }
        catch(err){
            setError(true);
        }
    };

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    value={city}
                    onChange={handleChange}
                    label="City Name"
                    variant="outlined"
                    required
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>No such place exists </p>}
            </form>
        </div>
    );
}

