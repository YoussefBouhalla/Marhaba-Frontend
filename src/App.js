import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./features/navbar/Navbar";
import Background from "./features/popups/Background";

function App() {
    
    const popup = useSelector(state => state.popup)
    return (
        <div className="content mx-auto">
            <Navbar/>
            <div className="main">
                {popup && <Background/>}
            </div>
        </div>
    );
  }
  
  export default App;