import React from "react";

const Forecast = ({ data }) => {
    if (!data) return <p className="text-center text-muted"></p>;

    // Group forecast data by date
    const groupedData = data.list.reduce((acc, item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString(); // Format date
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(item);
        return acc;
    }, {});

    return (
        <div>
            <h3 className="text-center mb-3">Weeekly Forecast</h3>
            <div>
                {Object.keys(groupedData).map((date, index) => {
                    const fullDate = new Date(date); // Create a Date object for the date
                    const day = fullDate.toLocaleDateString('en-US', { weekday: 'long' }); // Get the day of the week
                    
                    return (
                        <div
                            key={index}
                            className="card mb-4"
                            style={{
                                backgroundColor: "#1e1e1e",
                                color: "#fff",
                                padding: "15px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            {/* Display Day and Date */}
                            <h5 className="mb-3">
                                {day}, {date}
                            </h5>
                            <div className="d-flex align-items-center mb-3">
                                {/* Display summary (first item of the date) */}
                                <img
                                    src={`https://openweathermap.org/img/wn/${groupedData[date][0].weather[0].icon}@2x.png`}
                                    alt={groupedData[date][0].weather[0].description}
                                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                />
                                <p style={{ margin: "0 10px" }}>
                                    Temp: {groupedData[date][0].main.temp}°C
                                </p>
                                <p style={{ margin: "0 10px" }}>
                                    {groupedData[date][0].weather[0].description}
                                </p>
                            </div>
                            {/* Horizontal Scroll for hourly data */}
                            <div className="d-flex overflow-auto" style={{ gap: "15px" }}>
                                {groupedData[date].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="text-center"
                                        style={{
                                            minWidth: "100px",
                                            padding: "10px",
                                            backgroundColor: "#2a2a2a",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        <p>{new Date(item.dt * 1000).toLocaleTimeString()}</p>
                                        <img
                                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                            alt={item.weather[0].description}
                                            style={{ width: "40px", height: "40px" }}
                                        />
                                        <p>Temp: {item.main.temp}°C</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Forecast;
