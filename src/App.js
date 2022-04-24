import React from "react";
import Navbar from "./features/navbar/Navbar";
import Home from "./pages/Home";

function App() {

    return (
        <div className="content mx-auto">
            <Navbar/>
            <Home/>
        </div>
    );
  }
  
  export default App;