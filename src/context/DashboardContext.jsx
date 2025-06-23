import React, { createContext, useState, useEffect } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [widgets, setWidgets] = useState([]);
  const [editMode, setEditMode] = useState(true);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('dashboard-widgets'));
    if (saved) setWidgets(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('dashboard-widgets', JSON.stringify(widgets));
  }, [widgets]);

  return (
    <DashboardContext.Provider value={{ widgets, setWidgets, editMode, setEditMode, theme, setTheme }}>
      {children}
    </DashboardContext.Provider>
  );
};
