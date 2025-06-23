import React, { useState, useEffect } from "react";

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
      <h4>Calendar</h4>
      <p>{dat}</p>
    </div>
  );
}
