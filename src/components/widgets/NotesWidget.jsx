import React, { useState, useEffect } from "react";

export default function NotesWidget() {
  const[notes, setNotes] = useState([]);

 

  return (
    <div>
      <h4>Notes</h4>
      <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
      <p>{notes}</p>
    </div>
  );
}
