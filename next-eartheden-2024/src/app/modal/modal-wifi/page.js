const WifiModal = ({ wifi, onClose }) => {
  if (!wifi) return null;

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
                  </tr>
                </thead>
                <tbody>
                  <tr data-lat={wifi.latitude} data-lng={wifi.longitude}>
                    <td>{wifi.installationPlaceName}</td>
                    <td>{wifi.wifiSSID}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default WifiModal;
