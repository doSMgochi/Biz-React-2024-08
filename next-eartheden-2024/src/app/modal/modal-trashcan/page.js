import React, { useState } from "react";
import MapTooltip from "../../components/MapTooltip.js";

const TrashcanModal = ({ trashcans, onClose }) => {
  const [mapPosition, setMapPosition] = useState({
    latitude: null,
    longitude: null,
    show: false,
  });

  if (!trashcans || trashcans.length === 0) return null;

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
      id="trashcanModal"
      className="modal"
      style={{ display: "block" }}
      onClick={handleBackgroundClick}
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div id="trashcanModalResultSection">
          <section className="main">
            <div className="table-container">
              <table className="list">
                <thead>
                  <tr>
                    <th>위치</th>
                    <th>쓰레기통 종류</th>
                  </tr>
                </thead>
                <tbody>
                  {trashcans.map((trashcan, index) => (
                    <tr key={index}>
                      <td
                        onMouseEnter={(e) =>
                          handleMouseEnter(trashcan.위도, trashcan.경도, e)
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        {trashcan.위치}
                      </td>
                      <td>{trashcan["쓰레기통 종류"] || "일반"}</td>
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

export default TrashcanModal;
