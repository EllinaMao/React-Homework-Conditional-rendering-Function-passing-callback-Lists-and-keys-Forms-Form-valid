import { useState, useCallback } from "react";
import { useFetch } from "../../hooks/useFetch";
import WeatherInfo from "./WeatherInfo";
import CitySearch from "./CitySearch";

import "../../assets/css/Weather/WeatherContainer.css";

export default function WeatherContainer() {
  const API_KEY = "320651b078a14c579a2141615252712";
  const [city, setCity] = useState("auto:ip");
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=ua&aqi=no`;
  const { data, loading, error } = useFetch(url);

  const handleCitySelect = useCallback((selectedCity) => {
    setCity(selectedCity);
  }, []);

  return (
    <div className="weather-container-wrapper">
      <h1>Weather</h1>

      <CitySearch
        onCitySelect={handleCitySelect}
        API_KEY={API_KEY}
      />

      <WeatherInfo data={data} loading={loading} error={error} />
    </div>
  );
}
