import React from "react";

const widgetTypes = [
  { id: "clock", label: "Clock" },
  { id: "todo", label: "To-do" },
  { id: "notes", label: "Notes" },
  { id: "calendar", label: "Calendar" },
  { id: "quote", label: "Quote" },
];

export default function Sidebar({ onAdd }) {
  return (
    <div
      className="sidebar"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Widgets</h3>
      {widgetTypes.map((widget) => (
        <button key={widget.id} onClick={() => onAdd(widget.id)}>
          {widget.label}
        </button>
      ))}
    </div>
  );
}
