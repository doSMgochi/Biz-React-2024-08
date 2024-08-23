const DistrictSelector = ({
  selectedDistrict,
  districtOptions,
  isDistrictSelectOpen,
  toggleDistrictSelect,
  handleDistrictSelect,
}) => {
  return (
    <div className="custom-select-wrapper">
      <div className={`custom-select ${isDistrictSelectOpen ? "open" : ""}`}>
        <div className="custom-select-trigger" onClick={toggleDistrictSelect}>
          <span>{selectedDistrict || "시군구 선택"}</span>
          <div className="arrow"></div>
        </div>
        <div className="custom-options">
          {districtOptions.map((district, index) => (
            <span
              key={index}
              className="custom-option"
              onClick={() => handleDistrictSelect(district)}
            >
              {district}
            </span>
          ))}
        </div>
      </div>
      <select
        id="districtSelect"
        style={{ display: "none" }}
        value={selectedDistrict}
        onChange={(e) => handleDistrictSelect(e.target.value)}
      >
        <option value="">시군구 선택</option>
        {districtOptions.map((district, index) => (
          <option key={index} value={district}>
            {district}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DistrictSelector;
