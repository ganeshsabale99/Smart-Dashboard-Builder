import React, { useContext } from "react";
import ClockWidget from "./widgets/ClockWidget";
import TodoWidget from "./widgets/TodoWidget";
import NotesWidget from "./widgets/NotesWidget";
import CalendarWidget from "./widgets/CalendarWidget";
import QuoteWidget from "./widgets/QuoteWidget";
import { DashboardContext } from "../context/DashboardContext";

const widgetMap = {
  clock: ClockWidget,
  todo: TodoWidget,
  notes: NotesWidget,
  calendar: CalendarWidget,
  quote: QuoteWidget,
};

export default function WidgetWrapper({ widget }) {
  const { editMode, setWidgets } = useContext(DashboardContext);
  const WidgetComponent = widgetMap[widget.type];

  const handleRemove = () => {
    setWidgets((prev) => prev.filter((w) => w.id !== widget.id));
  };

  return (
    <div
      className="widget-card"
      draggable={editMode}
      style={{ borderRadius: "25px" }}
    >
      {editMode && (
        <button
          onClick={handleRemove}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
          }}
        >
          Close
        </button>
      )}
      <WidgetComponent />
    </div>
  );
}
