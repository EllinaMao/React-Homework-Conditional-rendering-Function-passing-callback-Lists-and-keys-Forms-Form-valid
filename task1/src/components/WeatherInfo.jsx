/**
 * Создайте компонент WeatherInfo, который отображает информацию о текущей погоде в заданном городе. Компонент должен показывать температуру, состояние погоды (солнечно, облачно, дождливо и т.д.), и иконку, соответствующую состоянию погоды. Реализуйте функциональность, чтобы при клике на кнопку "Показать детали" отображалась дополнительная информация о влажности и скорости ветра, а при клике на кнопку "Скрыть детали" эта информация скрывалась.

 */

/**
 * 320651b078a14c579a2141615252712
 */

import React, { useState, useEffect } from 'react';
//stop, i have api key and i will add fetch 
const WeatherInfo = ({ city, lang = 'ru' }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDetails, setShowDetails] = useState(false);


    const Api = "320651b078a14c579a2141615252712";
    useEffect(() => {

        const fetchWeather = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `http://api.weatherapi.com/v1/current.json?key=${Api}&q=${city}&lang=${lang}`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching weather data:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchWeather();

    }, [city, lang]);//if something change - fetch again


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!weatherData) {
        return null;
    }

    const {location, current} = weatherData;

    const iconUrl = current.condition.icon.startsWith('//')
    ?   `http:${current.condition.icon}`
    :   current.condition.icon;

    





}

export default WeatherInfo;