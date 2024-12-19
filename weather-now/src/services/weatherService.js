import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchCurrentWeather = async (city) => {
    const response = await axios.get(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
};

export const fetchForecast = async (city) => {
    const response = await axios.get(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
};
