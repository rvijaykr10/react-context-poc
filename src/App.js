import React from "react";
import Todos from "./components/Todos";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <Todos />
      </div>
    </GlobalProvider>
  );
}

export default App;
