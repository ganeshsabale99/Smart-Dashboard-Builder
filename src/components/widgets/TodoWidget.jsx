import React, { useState, useEffect } from "react";

export default function TodoWidget() {
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("dashboard-todos"));
    if (saved) setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("dashboard-todos", JSON.stringify(todos));
  }, [todos]);

  const handleCompleteTodo = (todo) => {
    setComplete((prev) => [...prev, todo]);
    setTodos((prev) => prev.filter((t) => t !== todo));
  };

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
        ✅ Todo
      </h4>
      <input
        type="text"
        value={todos}
        onChange={(e) => setTodos(e.target.value)}
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
        {todos}
      </p>
      {/* complete todo */}
      <button onClick={() => handleCompleteTodo(todos)}>Complete</button>
    </div>
  );
}
