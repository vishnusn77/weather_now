import React from 'react';

const CurrentWeather = ({ data }) => {
    if (!data) return <p className="text-center text-muted">No data available</p>;

    return (
        <div className="card text-center">
            <div className="card-header">
                <h2>{data.name}</h2>
            </div>
            <div className="card-body">
                <p className="card-text">Temperature: {data.main.temp}°C</p>
                <p className="card-text">Weather: {data.weather[0].description}</p>
                <p className="card-text">Humidity: {data.main.humidity}%</p>
            </div>
        </div>
    );
};

export default CurrentWeather;
