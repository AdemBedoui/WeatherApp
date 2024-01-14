import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('');
  const apiKey = 'a73da6a0c97e418db4b21516240201';

  useEffect(() => {
    if (city) {
      getWeather();
      getForecast();
    }
  }, [city]);

  const getWeather = () => {
    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=fr`)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const getForecast = () => {
    axios
      .get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&lang=fr`)
      .then((response) => {
        setForecast(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="container">
      <h1 className="text-center my-3">Weather App</h1>
      <div className="mb-3">
        <input type="text" className="form-control" value={city} placeholder="Enter City" onChange={e => setCity(e.target.value)} />
        <button className="btn btn-primary mt-3" onClick={getWeather}>Get Weather</button>
      </div>
      {weather && (
        <div className="card my-3">
          <div className="card-body">
            <h5 className="card-title">{weather.current.condition.text}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{weather.location.name}, {weather.location.country}</h6>
            <p className="card-text">Temperature: {weather.current.temp_c}°C</p>
          </div>
        </div>
      )}
      {forecast && (
        <div className="d-flex justify-content-around flex-wrap">
          {forecast.forecast.forecastday.map((day, index) => {
            const date = new Date(day.date);
            const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('fr-FR', options).replace(/\//g, '-');

            return (
              <div className="card my-3 mx-1" style={{ flex: '0 0 auto', width: '15rem' }} key={index}>
                <div className="card-body">
                  <h5 className="card-title">{`${formattedDate}`}</h5>
                  <img src={day.day.condition.icon} alt="weather icon" />
                  <p className="card-text">Max temp: {day.day.maxtemp_c}°C</p>
                  <p className="card-text">Min temp: {day.day.mintemp_c}°C</p>
                  <p className="card-text">Condition: {day.day.condition.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;