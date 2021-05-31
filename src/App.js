import { useState } from 'react';
import './App.css';

const APIkey = 'e6a65be06f3391d4b113444a0540b1dc';
const data = require('./data/current.city.list.min.json');

const App = () => {
  const [inputWord, setInputWord] = useState('');
  const [weatherData, setWeatherData] = useState({});

  const handleApi = async (filteredItem) => {
    const API = `https://api.openweathermap.org/data/2.5/weather?id=${filteredItem.item.id}&units=metric&appid=${APIkey}`;

    try {
      const response = await fetch(API);
      let data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (err) {
      console.error(`błąd w Api: ${err}`);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search.."
          onChange={(e) => setInputWord(e.target.value)}
        />

        {inputWord.length > 2
          ? data
              .filter((item) => {
                if (item.name.toLowerCase().includes(inputWord.toLowerCase())) {
                  return item;
                }
                return null;
              })
              .map((item, key) => (
                <button key={key} onClick={() => handleApi({ item })}>
                  {item.name}, {item.country}, {item.id}
                </button>
              ))
          : ''}
        {typeof weatherData.main != 'undefined' ? (
          <>
            <h3>{weatherData.name}</h3>
            <p>{weatherData.weather[0].description}</p>
            <p>Temp: {Math.round(weatherData.main.temp)}&#8451;</p>
            <p>
              Max: {Math.round(weatherData.main.temp_max)}&#8451; Min:{' '}
              {Math.round(weatherData.main.temp_min)}&#8451;
            </p>
            <p>Pressure: {weatherData.main.pressure} hPa</p>
            <p>
              Sunrise: {new Date(weatherData.sys.sunrise * 1000).getHours()}:
              {new Date(weatherData.sys.sunrise * 1000).getMinutes()}
            </p>
            <p>
              Sunset: {new Date(weatherData.sys.sunset * 1000).getHours()}:
              {new Date(weatherData.sys.sunset * 1000).getMinutes()}
            </p>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default App;
