import { useState, useEffect } from "react";
import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useDebounce } from "../../hooks/useDebounce";
import { useFadeTransition } from "../../hooks/useFadeTransition";

import "../../assets/css/Weather/CitySearch.css";

const CitySearch = ({ onCitySelect, API_KEY }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { shouldRender, isVisible, show, hide } = useFadeTransition(300, 10);

  const debouncedQuery = useDebounce(query, 900);
  const url = debouncedQuery
    ? `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${debouncedQuery}`
    : null;

  const { data: suggestions, loading } = useFetch(url);
  const shouldShowList = isOpen && suggestions && suggestions.length > 0;

  useEffect(() => {
    if (shouldShowList) {
      show();
    } else {
      hide();
    }
  }, [shouldShowList]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleSelect = (city) => {
    const fullLocation = `${city.name}, ${city.country}`;
    setQuery(fullLocation);
    setIsOpen(false);
    onCitySelect(fullLocation);
  };

  return (
    <div className="city-search-container">
      <input
        type="text"
        placeholder="Enter city..."
        value={query}
        onChange={handleInputChange}                                            
        onFocus={() => setIsOpen(true)}
      />

      {loading && <div className="search-loader">Searching...</div>}

      {shouldRender && (
        <ul className={`suggestions-list ${isVisible ? "visible" : ""}`}>
          {suggestions.map((item) => (
            <li key={item.id} onClick={() => handleSelect(item)}>
              <strong>{item.name}</strong>
              <small>
                {" "}
                ({item.region ? `${item.region}, ` : ""}
                {item.country})
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default  React.memo(CitySearch);
