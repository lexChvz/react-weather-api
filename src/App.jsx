import { useState, useEffect } from 'react';
import LocationForm from './components/LocationForm';
import Header from './components/Header';
import Result from './components/Results';
import Locations from './components/Locations';
import { generateLocation, generateWeather } from './services/location';
import './App.css';

import weatherConditionModel from './models/weatherCondition';

function App() {
  const [isLocationsLoading, setIsLocationsLoading] = useState(false);
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);
  const [error, setError] = useState();
  const [locations, setLocations] = useState([]);
  const [locationKey, setLocationKey] = useState('');
  const [textSearch, setTextSearch] = useState('');
  const [query, setQuery] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [currentCondition, setCurrentCondition] = useState([]);

  useEffect(() => {
    if (query) {
      generateLocation(query, setIsLocationsLoading, setLocations, setError);
    }
  }, [query]);

  useEffect(() => {
    if (locationKey) {
      generateWeather(locationKey, setIsWeatherLoading, setCurrentCondition, setError);
    }
  }, [locationKey]);

  if (error) {
    return (
      <div>
        <h1>Something went wrong!</h1>
      </div>
    );
  }

  function handleClick() {
    setQuery(textSearch);
    generateLocation(query, setIsLocationsLoading, setLocations, setError);
  }

  function handleForecast(locKey, locName) {
    setCurrentLocation(locName);
    setLocationKey(locKey);
    generateWeather(locKey, setIsWeatherLoading, setCurrentCondition, setError);
  }

  const currentWeatherCondition = weatherConditionModel(currentCondition);

  return (
    <>
      <Header />
      <LocationForm searchValue={textSearch} inputStateOnChange={setTextSearch} btnOnClick={handleClick} />

      <div className='locations-section'>
        {isLocationsLoading && (
          <div>
            <p>Fetching the locations...</p>
          </div>
        )}
        {locations !== null && locations.length
          ? locations.map((location, idx) => {
              return <Locations key={idx} data={location} clickHandle={handleForecast} />;
            })
          : null}
      </div>

      {isWeatherLoading && (
        <div>
          <p>Getting the weather condition of {currentLocation}...</p>
        </div>
      )}
      {locationKey &&
        currentWeatherCondition &&
        currentWeatherCondition.map((weather, idx) => {
          return <Result key={idx} data={weather} currentLocation={currentLocation} />;
        })}
    </>
  );
}

export default App;
