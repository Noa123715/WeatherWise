import { API_KEY, cityNameTranslations } from '../constants';
import { useEffect, useState } from 'react';

export default function CityTab(props) {

    const [weather, setWeather] = useState(null); // State to hold weather data

    const getWeatherIcon = (feelsLikeTemp) => {
        // Determine the weather icon based on the feels-like temperature
        if (feelsLikeTemp <= 20) return '❄️';
        if (feelsLikeTemp < 30) return '🌤️';
        return '☀️';
    };

    useEffect(() => {
        const fetchCityWeather = async () => {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${API_KEY}&units=metric&lang=he`
            );
            const data = await res.json();
            setWeather(data);
        };

        fetchCityWeather();
    }, []); // Fetch weather data when the component mounts

    // If weather data is not yet available, show a loading message
    if (!weather) return <div>טוען נתונים עבור {props.city}...</div>;

    const cityTab = {
        // Create a city tab object with the necessary data
        city: props.city,
        description: weather.weather[0].description,
        temp: Math.round(weather.main.temp),
        feels_like: Math.round(weather.main.feels_like),
        humidity: weather.main.humidity,
        icon: getWeatherIcon(weather.main.feels_like),
    };

    return (
        <div className="weather-tab">
            <div className="header">
                <div className="title-row">
                    <h1 className="city-name">{cityNameTranslations[cityTab.city]}</h1>
                    <div className="icon">{cityTab.icon}</div>
                </div>
                <p className="description">{cityTab.description}</p>
            </div>

            <div className="data-grid">
                <div className="data-item">
                    <div className="label">טמפר' נמדדת</div>
                    <div className="value">{cityTab.temp}°C</div>
                </div>
                <div className="data-item">
                    <div className="label">טמפר' מורגשת</div>
                    <div className="value">{cityTab.feels_like}°C</div>
                </div>
                <div className="data-item">
                    <div className="label">לחות</div>
                    <div className="value">{cityTab.humidity}%</div>
                </div>
            </div>
        </div>
    );
}