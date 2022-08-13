import "./App.css";
import React, { useEffect } from "react";
import { ReserveTicket } from "./views/ReserveTicket";

function App() {
  useEffect(() => {
    // 👇️ set style on body element
    document.body.style.backgroundColor = "e4efd6";
  }, []);
  return (
      <div className="App">
        <ReserveTicket />
      </div>
  );
}

export default App;
