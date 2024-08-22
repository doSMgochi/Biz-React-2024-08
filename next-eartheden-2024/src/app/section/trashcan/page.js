"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import TrashcanModal from "../../modal/modal-trashcan/page.js";

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

const TrashcanSearchSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTrashcan, setSelectedTrashcan] = useState(null);

  const handleSearch = () => {
    const trashcanData = {
      location: "서울역",
      binType: "일반쓰레기통",
    };
    setSelectedTrashcan(trashcanData);
    setShowModal(true);
  };

  return (
    <div className="background trash-can">
      <div className="overlay"></div>
      <section className="search trash-can">
        <h2>
          <FontAwesomeIcon icon={faTrashAlt} className="default-icon" /> Trash
          Can
        </h2>
        <h6>공공쓰레기통 검색</h6>

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
          <select id="trashcanCitySelect" style={{ display: "none" }}>
            <option value="">도시 선택</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button id="trashcanCityDistrictSearchButton" onClick={handleSearch}>
          지역 검색
        </button>
        <div className="mg-10">
          <input
            type="text"
            id="trashcanSearchInput"
            placeholder="위치를 검색하세요"
            autoComplete="off"
          />
          <button id="trashcanSearchButton" onClick={handleSearch}>
            검색
          </button>
        </div>
      </section>

      {showModal && (
        <TrashcanModal
          trashcan={selectedTrashcan}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default TrashcanSearchSection;
