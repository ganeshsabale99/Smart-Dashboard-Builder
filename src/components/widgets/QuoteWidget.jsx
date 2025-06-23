import React, { useState, useEffect } from "react";

export default function QuoteWidget() {
  const quote = [
    "The only way to do great work is to love what you do.",
    "Never Give up",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Never Give up",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
  ][Math.floor(Math.random() * 7)];

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
        💡Quote of the Day
      </h4>
      <p
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.5",
          marginBottom: "20px",
          marginTop: "20px",
          color: "marron",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        {quote}
      </p>
    </div>
  );
}
