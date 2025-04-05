import React from "react";
import AddStock from "./components/AddStock";  // Import AddStock component
import Portfolio from "./components/Portfolio";  // Import Portfolio component

function App() {
  return (
    <div className="App">
      <h1>Pedro's Market View 📈</h1>
      <AddStock />  {/* Add the AddStock form here */}
      <Portfolio />  {/* Add the Portfolio component here */}
    </div>
  );
}

export default App;
