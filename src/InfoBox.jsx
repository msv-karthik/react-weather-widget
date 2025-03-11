import { Typography, Card, CardContent, Box } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './InfoBox.css';  

export default function InfoBox({ info }) {
    let getWeatherIcon = (weather) => {
        switch (weather.toLowerCase()) {
            case 'clear sky':
                return <WbSunnyIcon className="info-box-weather-icon" />;
            case 'haze':
            case 'mist':
                return <CloudIcon className="info-box-weather-icon" />;
            case 'snow':
                return <AcUnitIcon className="info-box-weather-icon" />;
            default:
                return <CloudIcon className="info-box-weather-icon" />;
        }
    };

    return (
        <div className="info-box-container">
            <Card className="info-box-card">
                <CardContent>
                    <Typography className="info-box-header">{info.city}</Typography>
                    <Box className="info-box-weather">
                        {getWeatherIcon(info.weather)}
                        <Typography variant="h6">{info.weather}</Typography>
                    </Box>
                    <div className="info-box-details">
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Min Temp: {info.tempMin}&deg;C | Max Temp: {info.tempMax}&deg;C</p>
                        <p>Humidity: {info.humidity}%</p>
                        <p>Feels Like: {info.feelsLike}&deg;C</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
