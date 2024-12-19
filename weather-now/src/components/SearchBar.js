import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        onSearch(city);
        setCity('');
    };

    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button className="btn btn-primary" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
