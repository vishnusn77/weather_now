import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleSearch = () => {
        if (city.trim() !== "") {
            onSearch(city);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter city name"
                value={city}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress} // Add keypress event listener
            />
            <button className="btn btn-primary" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
