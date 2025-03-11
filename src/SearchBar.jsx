import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({updateInfo}){

    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await response.json();
            let result={
                city: city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description
            };

            return result;
        } catch(err){
            setError(true);
            throw err;
        }
    };

    let handleChange = (event)=>{
        setCity(event.target.value);
        setError(false);
    }

    let handleSubmit = async(event)=>{
        
            event.preventDefault();
            setError(false);
        try{
            let newInfo = await getWeatherInfo();
            setCity("");
            updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
    }
    return(
        <div className='search-bar-container'>
            <form className='search-bar-form' onSubmit={handleSubmit}>
                <TextField id="city" label="search city.." variant="outlined" required value={city} onChange={handleChange}
                className='search-bar-textfield'
                />
                <Button variant="contained" type='submit'
                className='search-bar-button'>Search</Button>
                {error && <p style={{color:"red"}}>no such place in our api</p>}
            </form>
        </div>
    );
}