import React from "react";

const Forecast = ({ data }) => {
    if (!data) return <p className="text-center text-muted">No forecast available</p>;

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
            <h3 className="text-center mb-3">7-Day Forecast</h3>
            <div>
                {Object.keys(groupedData).map((date, index) => (
                    <div key={index} className="mb-3">
                        <h5>{date}</h5>
                        <div className="d-flex flex-nowrap overflow-auto">
                            {groupedData[date].map((item, idx) => (
                                <div key={idx} className="card me-2 mb-2" style={{ width: "150px" }}>
                                    <div className="card-body text-center">
                                        <p>{new Date(item.dt * 1000).toLocaleTimeString()}</p>
                                        <p>Temp: {item.main.temp}°C</p>
                                        <p>{item.weather[0].description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forecast;
