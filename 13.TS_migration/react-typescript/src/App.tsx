import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

const showAlert = () => {
  alert("alert");
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={showAlert}>버튼</Button>
      </header>
    </div>
  );
}

export default App;
