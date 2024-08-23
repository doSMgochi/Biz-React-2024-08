// components/RestroomModal.js
import React, { useState } from "react";
import MapTooltip from "../../components/MapTooltip";

const RestroomModal = ({ restrooms, onClose }) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    coordinates: null,
    position: { x: 0, y: 0 },
  });

  if (!restrooms || restrooms.length === 0) return null;

  const handleBackgroundClick = (event) => {
    if (event.target.className === "modal") {
      onClose();
    }
  };

  const handleMouseEnter = (event, coordinates) => {
    const { clientX: x, clientY: y } = event;
    setTooltip({
      visible: true,
      coordinates,
      position: { x: x + 10, y: y + 10 }, // Offset to prevent overlap
    });
  };

  const handleMouseMove = (event) => {
    if (tooltip.visible) {
      const { clientX: x, clientY: y } = event;
      setTooltip((prevTooltip) => ({
        ...prevTooltip,
        position: { x: x + 10, y: y + 10 }, // Update position on mouse move
      }));
    }
  };

  const handleMouseLeave = () => {
    setTooltip({
      ...tooltip,
      visible: false,
    });
  };

  return (
    <div
      id="restroomModal"
      className="modal"
      style={{ display: "block" }}
      onClick={handleBackgroundClick}
      onMouseMove={handleMouseMove} // Track mouse movements
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div id="restroomModalResultSection">
          <section className="main">
            <div className="table-container">
              <table className="list">
                <thead>
                  <tr>
                    <th>화장실명</th>
                    <th>도로명 주소</th>
                    <th>지번 주소</th>
                  </tr>
                </thead>
                <tbody>
                  {restrooms.map((restroom, index) => {
                    const latitude =
                      restroom.WGS84위도 !== "null"
                        ? parseFloat(restroom.WGS84위도)
                        : null;
                    const longitude =
                      restroom.WGS84경도 !== "null"
                        ? parseFloat(restroom.WGS84경도)
                        : null;

                    return (
                      <tr
                        key={index}
                        onMouseEnter={(e) =>
                          handleMouseEnter(e, { lat: latitude, lng: longitude })
                        }
                        onMouseLeave={handleMouseLeave}
                      >
                        <td>{restroom.화장실명}</td>
                        <td>{restroom.소재지도로명주소 || ""}</td>
                        <td>{restroom.소재지지번주소 || ""}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      {tooltip.visible && tooltip.coordinates && (
        <MapTooltip
          position={tooltip.position}
          coordinates={tooltip.coordinates}
          isVisible={tooltip.visible}
        />
      )}
    </div>
  );
};

export default RestroomModal;
