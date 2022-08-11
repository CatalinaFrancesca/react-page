import "./App.css";
import React from "react";
import Container from "@material-ui/core/Container";
import { ReserveTicket } from "./views/ReserveTicket";

function App() {
  return (
    <Container>
      <div className="App">
        <ReserveTicket />
      </div>
    </Container>
  );
}

export default App;
