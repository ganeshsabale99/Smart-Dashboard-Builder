import React, { useState, useEffect } from "react";

export default function ClockWidget() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h4
        style={{
          color: "blue",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.5",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        ⏰ Clock
      </h4>
      <p
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          color: "marron",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.5",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        {time}
      </p>
    </div>
  );
}
