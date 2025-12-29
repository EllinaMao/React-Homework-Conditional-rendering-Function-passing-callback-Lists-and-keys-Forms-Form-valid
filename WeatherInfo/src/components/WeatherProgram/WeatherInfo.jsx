/**
 * Создайте компонент WeatherInfo, который отображает информацию о текущей погоде в заданном городе. Компонент должен показывать температуру, состояние погоды (солнечно, облачно, дождливо и т.д.), и иконку, соответствующую состоянию погоды. Реализуйте функциональность, чтобы при клике на кнопку "Показать детали" отображалась дополнительная информация о влажности и скорости ветра, а при клике на кнопку "Скрыть детали" эта информация скрывалась.
 */
import "../../assets/css/Weather/WeatherInfo.css";
import { useFadeTransition } from "../../hooks/useFadeTransition";

const WeatherInfo = ({ data, loading, error }) => {
  const { shouldRender, isVisible, show, hide } = useFadeTransition();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!data) {
    return null;
  }

  const { location, current } = data;

  const iconUrl = current.condition.icon.startsWith("//")
    ? `http:${current.condition.icon}`
    : current.condition.icon;

  const handleToggle = () => {
    if (isVisible) {
      hide();
    } else {
      show();
    }
  };

  return (
    <div className="weather-info">
      <h2>
        Weather in {location.name}, {location.country}
      </h2>
      <div className="current-weather">
        <img src={iconUrl} alt={current.condition.text} />
        <p>Temperature: {current.temp_c}°C</p>
        <p>Condition: {current.condition.text}</p>
      </div>
      <button onClick={() => handleToggle()}>
        {isVisible ? "Hide details" : "Show details"}
      </button>
      {shouldRender && (
        <div className={`weather-details ${isVisible ? "visible" : ""}`}>
          <p>Humidity: {current.humidity}%</p>
          <p>Wind speed: {current.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
