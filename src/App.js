import React from "react";
import "./App.css";

// yarn install axios -- in Terminal
// import axios from "axios" 

import PhotoList from "./components/PhotoList"

function App() {

  return (
    <div className="App">
      <h1>NASA! We do Photos too.</h1>
      <PhotoList/>
      
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
    </div>
  );
}

export default App;
