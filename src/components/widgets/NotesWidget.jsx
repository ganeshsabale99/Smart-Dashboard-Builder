import React, { useState, useEffect } from "react";

export default function NotesWidget() {
  const [notes, setNotes] = useState([]);
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
        📝 Notes
      </h4>
      <input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        style={{ marginBottom: "20px", padding: "5px", borderRadius: "5px" }}
      />
      <p
        style={{
          color: "marron",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3",
          fontSize: "15px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.5",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        {notes}
      </p>
      <button onClick={() => setNotes("")}>❌</button>
    </div>
  );
}
