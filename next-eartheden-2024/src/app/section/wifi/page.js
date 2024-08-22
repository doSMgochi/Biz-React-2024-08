"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import WifiModal from "../../modal/modal-wifi/page.js";

const options = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "세종",
];

const WifiSearchSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWifi, setSelectedWifi] = useState(null);

  const handleSearch = () => {
    const wifiData = {
      installationPlaceName: "서울역",
      wifiSSID: "SeoulFreeWiFi",
      location: "서울특별시 중구",
    };
    setSelectedWifi(wifiData);
    setShowModal(true);
  };

  return (
    <div className="background wifi">
      <div className="overlay"></div>
      <section className="search wifi">
        <h2>
          <FontAwesomeIcon icon={faWifi} className="default-icon" /> Wifi
        </h2>
        <h6>공용와이파이 검색</h6>

        <div className="custom-select-wrapper">
          <div className="custom-select">
            <div className="custom-select-trigger">
              <span>도시 선택</span>
              <div className="arrow"></div>
            </div>
            <div className="custom-options">
              {options.map((option) => (
                <span
                  key={option}
                  className="custom-option"
                  data-value={option}
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
          <select id="wifiCitySelect" style={{ display: "none" }}>
            <option value="">도시 선택</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button id="wifiCityDistrictSearchButton" onClick={handleSearch}>
          지역 검색
        </button>
        <div className="mg-10">
          <input
            type="text"
            id="wifiSearchInput"
            placeholder="위치를 검색하세요"
            autoComplete="off"
          />
          <button id="wifiSearchButton" onClick={handleSearch}>
            검색
          </button>
        </div>
      </section>

      {showModal && (
        <WifiModal wifi={selectedWifi} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default WifiSearchSection;
