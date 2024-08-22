const TrashcanModal = ({ trashcan, onClose }) => {
  if (!trashcan) return null;

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
                  <tr
                    data-lat={trashcan.latitude}
                    data-lng={trashcan.longitude}
                  >
                    <td>{trashcan.location}</td>
                    <td>{trashcan.binType}</td>
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
export default TrashcanModal;
