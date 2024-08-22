import React, { useState, useEffect } from "react";

const RestroomModal = ({ onClose }) => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // JSON 데이터 요청
  const fetchAllData = async () => {
    try {
      const files = [
        "공중화장실정보강원.json",
        "공중화장실정보경기.json",
        "공중화장실정보경남.json",
        "공중화장실정보경북.json",
        "공중화장실정보광주.json",
        "공중화장실정보대구.json",
        "공중화장실정보대전.json",
        "공중화장실정보부산.json",
        "공중화장실정보서울.json",
        "공중화장실정보세종.json",
        "공중화장실정보울산.json",
        "공중화장실정보인천.json",
        "공중화장실정보전남.json",
        "공중화장실정보전북.json",
        "공중화장실정보제주.json",
        "공중화장실정보충남.json",
        "공중화장실정보충북.json",
      ];

      const promises = files.map((file) =>
        fetch(`/json/${file}`).then((res) => res.json())
      );
      const results = await Promise.all(promises);
      const mergedData = results.flat();
      setData(mergedData);
    } catch (error) {
      console.error("JSON 데이터를 불러오는데 실패하였습니다.", error);
    }
  };

  useEffect(() => {
    if (!data) {
      fetchAllData();
    }
  }, [data]);

  // 검색어에 따라 데이터를 필터링
  useEffect(() => {
    if (searchQuery) {
      const results = data.filter(
        (item) =>
          item.화장실명.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.소재지지번주소
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          (item.소재지도로명주소 &&
            item.소재지도로명주소
              .toLowerCase()
              .includes(searchQuery.toLowerCase()))
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [searchQuery, data]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <input
          type="text"
          placeholder="Search by restroom name or address"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="table-container">
          <table className="list">
            <thead>
              <tr>
                <th>화장실명</th>
                <th>지번 주소</th>
                <th>도로명 주소</th>
                <th>관리기관명</th>
                <th>전화번호</th>
                <th>개방시간</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.length > 0 ? (
                filteredResults.map((item, index) => (
                  <tr key={index}>
                    <td>{item.화장실명}</td>
                    <td>{item.소재지지번주소}</td>
                    <td>{item.소재지도로명주소 || "없음"}</td>
                    <td>{item.관리기관명}</td>
                    <td>{item.전화번호}</td>
                    <td>{item.개방시간상세 || "정보 없음"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No results found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RestroomModal;
