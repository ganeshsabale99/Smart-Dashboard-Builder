import React, { useState, useEffect } from "react";
import moment from "moment";

export default function CalendarWidget() {
  const [dat, setDat] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const id = setInterval(() => {
      setDat(new Date().toLocaleDateString());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h4
        style={{
          color: "blue",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.5",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        📅 Calendar
      </h4>
      <p
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          textAlign: "center",
          textDecoration: "underline",
          color: "marron",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.5",
          marginBottom: "20px",
          marginTop: "20px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        {dat ? moment(dat).format("dddd, MMMM Do YYYY") : ""}
      </p>
    </div>
  );
}
