import React, { useState } from "react";
import MapTooltip from "../../components/MapTooltip.js";

const WifiModal = ({ wifis, onClose }) => {
  const [mapPosition, setMapPosition] = useState({
    latitude: null,
    longitude: null,
    show: false,
  });

  if (!wifis || wifis.length === 0) return null;

  const handleMouseEnter = (latitude, longitude, event) => {
    const { clientX, clientY } = event;
    setMapPosition({ latitude, longitude, show: true, x: clientX, y: clientY });
  };

  const handleMouseLeave = () => {
    setMapPosition({ latitude: null, longitude: null, show: false });
  };

  const handleBackgroundClick = (event) => {
    if (event.target.className === "modal") {
      onClose();
    }
  };

  return (
    <div
      id="wifiModal"
      className="modal"
      style={{ display: "block" }}
      onClick={handleBackgroundClick}
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div id="wifiModalResultSection">
          <section className="main">
            <div className="table-container">
              <table className="list">
                <thead>
                  <tr>
                    <th>설치 장소명</th>
                    <th>WiFi SSID</th>
                    <th>도로명 주소</th>
                    <th>지번 주소</th>
                  </tr>
                </thead>
                <tbody>
                  {wifis.map((wifi, index) => (
                    <tr
                      key={index}
                      onMouseEnter={(e) =>
                        handleMouseEnter(wifi.WGS84위도, wifi.WGS84경도, e)
                      }
                      onMouseLeave={handleMouseLeave}
                    >
                      <td>{wifi.설치장소명}</td>
                      <td>{wifi.WIFISSID}</td>
                      <td>{wifi.소재지도로명주소}</td>
                      <td>{wifi.소재지지번주소}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      {mapPosition.show && (
        <MapTooltip
          latitude={mapPosition.latitude}
          longitude={mapPosition.longitude}
          style={{ top: mapPosition.y, left: mapPosition.x }}
        />
      )}
    </div>
  );
};

export default WifiModal;
