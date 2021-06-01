import { useState } from 'react';
import {
  StyledWrapper,
  StyledInputWrapper,
  StyledInput,
  StyledResults,
  StyledWeather,
  StyledNoData,
  StyledMainWeather,
  StyledAdditionalWeather,
} from './styles.js';

const APIkey = 'e6a65be06f3391d4b113444a0540b1dc';
const localData = require('./data/current.city.list.min.json');

const App = () => {
  const [inputWord, setInputWord] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [emptyCartMsg, setEmptyCartMsg] = useState('Enter city name above');

  const handleApi = async (filteredItem) => {
    const API = filteredItem
      ? `https://api.openweathermap.org/data/2.5/weather?id=${filteredItem.item.id}&units=metric&appid=${APIkey}`
      : `https://api.openweathermap.org/data/2.5/weather?q=${inputWord}&units=metric&appid=${APIkey}`;

    try {
      const response = await fetch(API);
      if (response.status === 404) {
        setEmptyCartMsg('City name not found, try again');
      }
      let data = await response.json();
      setWeatherData(data);
    } catch (err) {
      console.error(`błąd w Api: ${err.status}`);
      if (err.status !== 404) {
      }
    }
    setInputWord('');
  };

  const filterResults = localData.filter((item) =>
    item.name.toLowerCase().includes(inputWord.toLowerCase())
  );

  return (
    <>
      <StyledWrapper>
        <StyledInputWrapper>
          <StyledInput
            type="text"
            placeholder="Search.."
            onChange={(e) => setInputWord(e.target.value)}
            value={inputWord}
            maxLength={30}
            onBlur={() => setTimeout(() => setInputWord(''), 100)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleApi();
              }
            }}
          />

          {inputWord.length > 2 ? (
            <StyledResults>
              <ul>
                {filterResults.length ? (
                  filterResults.map((item, key) => (
                    <li key={key} onClick={() => handleApi({ item })}>
                      {item.name}, {item.country}
                    </li>
                  ))
                ) : (
                  <p>{inputWord}</p>
                )}
              </ul>
            </StyledResults>
          ) : (
            ''
          )}
        </StyledInputWrapper>

        <StyledWeather>
          {typeof weatherData.main != 'undefined' ? (
            <>
              <StyledMainWeather>
                <h2>
                  {weatherData.name}, {weatherData.sys.country}
                </h2>
                <p>{weatherData.weather[0].description}</p>
                <h3>{Math.round(weatherData.main.temp)}&#8451;</h3>
                <p>
                  Max: {Math.round(weatherData.main.temp_max)}&#8451; Min:{' '}
                  {Math.round(weatherData.main.temp_min)}&#8451;
                </p>
              </StyledMainWeather>
              <StyledAdditionalWeather>
                <p>Pressure: {weatherData.main.pressure} hPa</p>
                <span>
                  Sunrise: {new Date(weatherData.sys.sunrise * 1000).getHours()}
                  :{new Date(weatherData.sys.sunrise * 1000).getMinutes()}
                </span>
                <span>
                  Sunset: {new Date(weatherData.sys.sunset * 1000).getHours()}:
                  {new Date(weatherData.sys.sunset * 1000).getMinutes()}
                </span>
              </StyledAdditionalWeather>
            </>
          ) : (
            <StyledNoData>
              <p>{emptyCartMsg}</p>
            </StyledNoData>
          )}
        </StyledWeather>
      </StyledWrapper>
    </>
  );
};

export default App;
