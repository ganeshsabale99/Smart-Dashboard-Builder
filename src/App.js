import React, { useContext } from "react";
import {
  DashboardProvider,
  DashboardContext,
} from "./context/DashboardContext";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./styles/styles.css";

function InnerApp() {
  const { setWidgets, editMode, setEditMode, theme, setTheme } =
    useContext(DashboardContext);

  const handleAddWidget = (type) => {
    setWidgets((prev) => [...prev, { id: Date.now(), type }]);
  };

  return (
    <div className={`app ${theme}`}>
      <Sidebar onAdd={handleAddWidget} />
      <Dashboard />
      <div className="controls">
        <button onClick={() => setEditMode(!editMode)}>
          {editMode ? "View Mode" : "Edit Mode"}
        </button>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <DashboardProvider>
      <InnerApp />
    </DashboardProvider>
  );
}
