import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { fetchCurrentWeather, fetchForecast } from './services/weatherService';

const App = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleSearch = async (city) => {
        const weatherData = await fetchCurrentWeather(city);
        const forecastData = await fetchForecast(city);
        setCurrentWeather(weatherData);
        setForecast(forecastData);
    };

    return (
        <div className="container py-4">
            <h1 className="text-center mb-4">WeatherNow</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <CurrentWeather data={currentWeather} />
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                    <Forecast data={forecast} />
                </div>
            </div>
        </div>
    );
};

export default App;
