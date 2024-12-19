import React from "react";
import weatherIllustration from '../assets/icon.png';

const CurrentWeather = ({ data }) => {
    if (!data) {
        return (
            <div className="text-center" style={{ padding: "20px" }}>
                <h2>Welcome to WeatherNow!</h2>
                <p>Enter a city name above to see the current weather and a Weekly forecast.</p>
                <img
                    src= {weatherIllustration}
                    alt="Weather Illustration"
                    style={{
                        width: "300px", 
                        height: "auto", 
                        marginTop: "20px",
                        borderRadius: "10px",
                    }}
                />
            </div>
        );
    }

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return (
        <div className="card text-center">
            <div className="card-header">
                <h2>{data.name}</h2>
            </div>
            <div className="card-body">
                <img src={iconUrl} alt={data.weather[0].description} />
                <p className="card-text">
                    Temperature: <span className="text-warning">{data.main.temp}°C</span>
                </p>
                <p className="card-text">
                    Weather: <span className="text-info">{data.weather[0].description}</span>
                </p>
                <p className="card-text">Humidity: {data.main.humidity}%</p>
            </div>
        </div>
    );
};

export default CurrentWeather;
