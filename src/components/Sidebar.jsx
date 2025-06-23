import React from "react";

const widgetTypes = [
  { id: "clock", label: "⏰ Clock" },
  { id: "todo", label: "✅ To-do" },
  { id: "notes", label: "📝 Notes" },
  { id: "calendar", label: "📅 Calendar" },
  { id: "quote", label: "💡 Quote" },
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
        height: "100%",
        backgroundColor: "#f4f4f4",
        padding: "1rem",
        borderRadius: "25px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
        Widgets
      </h3>
      {widgetTypes.map((widget) => (
        <button
          key={widget.id}
          onClick={() => onAdd(widget.id)}
          style={{
            fontSize: "20px",
            fontWeight: "bold",
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
          {widget.label}
        </button>
      ))}
    </div>
  );
}
