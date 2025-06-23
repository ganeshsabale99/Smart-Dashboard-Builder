import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import WidgetWrapper from './WidgetWrapper';

export default function Dashboard() {
  const { widgets, setWidgets } = useContext(DashboardContext);

  const handleDrop = (type) => {
    const id = Date.now();
    setWidgets(prev => [...prev, { id, type, x: 0, y: 0 }]);
  };

  return (
    <div className="dashboard-grid">
      {widgets.map(widget => (
        <WidgetWrapper key={widget.id} widget={widget} />
      ))}
    </div>
  );
}
