import React, { useState, useEffect } from "react";

export default function QuoteWidget() {
    const quote = "The only way to do great work is to love what you do.";
 
  return (
    <div>
      <h4>Quote</h4>
      <p>{quote}</p>
    </div>
  );
}
