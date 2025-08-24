import React, { useEffect, useState } from "react";
import "./Heartbeat.css"; // Import the CSS file for styling
import Love from "../love/Love";

function Heartbeat() {
  const [showPage, setShowPage] = useState(false);
  const handleClick = () => {
    setShowPage(true);
  };
  const [heartbeat, setHeartBeat] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartBeat((prev) => prev + 100);
    }, 500); // every 500ms increase (adjust speed as needed)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="heartbeat-container">
      {/* Background with hearts */}
      <div className="background-hearts"></div>
      <button
        style={{
          marginBottom: 200,
          border: "none",
          color: "red",
          cursor: "pointer",
          fontSize: "18px",
        }}
        onClick={handleClick}
      >
        Click Me !
      </button>

      {/* Cardiogram line */}
      <div className="cardiogram">
        <svg viewBox="0 0 500 100" className="ecg-svg">
          <path
            d="M0 50 L50 50 L70 10 L90 90 L110 50 L200 50 L220 20 L240 80 L260 50 L500 50"
            className="ecg-path"
          />
        </svg>
      </div>

      {/* Popping heart */}
      <div className="heart">❤️</div>
      <div className="heartbeatcounter">My HeartBeat {heartbeat}</div>
      {showPage && (
        <div className="reveal-page">
          <Love />
        </div>
      )}
    </div>
  );
}

export default Heartbeat;
