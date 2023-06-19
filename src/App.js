import React, { useState, useEffect } from "react";
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast';
import axios from './client/index';
import './App.css';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const data = {
        value: `${latitude} ${longitude}`,
      }
      if (latitude && longitude) {
        handleOnSearchChange(data);
      }
    });
  }

  const handleOnSearchChange = async (searchData) => {
    try {
      if (searchData && searchData.value) {
        const [lat, lon] = searchData.value.split(" ");
        const currentWeatherData = axios.get(`/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
        const forecastData = axios.get(`/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
        const [weather, forecast] = await Promise.all([currentWeatherData, forecastData])
        setCurrentWeather({ searchData, ...weather });
        setForecastWeather({ searchData, ...forecast });
      }
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchLocation();
  }, [])

  return (
    <div className="App">
      <div className="container mt-3">
        {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
        {forecastWeather && <Forecast forecastWeather={forecastWeather} />}
      </div>
    </div>
  );
}

export default App;
