import { useScrollTrigger } from '@mui/material';
import SearchBar from './SearchBar'
import InfoBox from './infoBox'
import { useState } from 'react';
import {Container,Typography} from '@mui/material';
import './WeatherApp.css';

export default function WeatherApp(){


    const [weatherInfo,setWeatherInfo] = useState(null);

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    
    return(
        <Container className='weather-app-container'>
            <Typography className='weather-app-title'>Weather App</Typography>
            <SearchBar updateInfo={updateInfo} />
            {weatherInfo && <InfoBox info={weatherInfo} />} 
        </Container>
    );
}

