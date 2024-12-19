import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import ErrorAlert from './components/ErrorAlert'; // Import the ErrorAlert component
import Footer from "./components/Footer"; // Import Footer component
import { fetchCurrentWeather, fetchForecast } from './services/weatherService';

const App = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null); // New state for error handling

    const handleSearch = async (city) => {
        try {
            setError(null); // Clear previous errors
            const weatherData = await fetchCurrentWeather(city);
            const forecastData = await fetchForecast(city);
            setCurrentWeather(weatherData);
            setForecast(forecastData);
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError('⚠️ City not found. Please try another search.');
            } else {
                setError('⚠️ Something went wrong. Please try again later.');
            }
            setCurrentWeather(null); // Clear current weather if an error occurs
            setForecast(null); // Clear forecast if an error occurs
        }
    };

    return (
        <div className="container py-4">
            <h1 className="text-center mb-4">WeatherNow</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
            {/* Display Error Alert */}
            {error && (
                <div className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        <ErrorAlert message={error} />
                    </div>
                </div>
            )}
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
            <Footer /> {/* Add Footer Component */}
        </div>
    );
};

export default App;
