import React from "react";
import CityOptions from "./CityOptions.js";

const CitySelector = ({
  selectedCity,
  isCitySelectOpen,
  toggleCitySelect,
  handleCitySelect,
}) => {
  return (
    <div className="custom-select-wrapper">
      <div className={`custom-select ${isCitySelectOpen ? "open" : ""}`}>
        <div className="custom-select-trigger" onClick={toggleCitySelect}>
          <span>{selectedCity || "도시 선택"}</span>
          <div className="arrow"></div>
        </div>
        <div className="custom-options">
          {CityOptions.map((city) => (
            <span
              key={city}
              className="custom-option"
              onClick={() => handleCitySelect(city)}
            >
              {city}
            </span>
          ))}
        </div>
      </div>
      <select
        id="restroomCitySelect"
        style={{ display: "none" }}
        value={selectedCity}
        onChange={(e) => handleCitySelect(e.target.value)}
      >
        <option value="">도시 선택</option>
        {CityOptions.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
