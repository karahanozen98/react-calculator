import React from "react";
import "./App.css";
import Calculator from "./Calculator.js"


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Simple Calculator</h1>
      </header>
      <div className="App-body">
      <Calculator></Calculator>
      </div>
       <footer className="App-footer">
        <p>Designed by Karahan Özen</p>
        <p>
          {" "}
          E-Mail:{" "}
          <a href="mailto:karahanozen98@gmail.com" style={{ color: "white" }}>
            {" "}
            karahanozen98@gmail.com{" "}
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
