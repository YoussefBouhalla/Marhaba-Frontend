import React from "react";
import Navbar from "./features/navbar/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import OurMeals from "./pages/OurMeals";
import OurOffers from "./pages/OurOffers";

function App() {

    return (
        <div className="content mx-auto">
            <Navbar/>
            <React.Fragment>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='our-meals' element={<OurMeals />} />
                        <Route path='our-offers' element={<OurOffers />} />
                    </Routes>
                </Router>
            </React.Fragment>
        </div>
    );
  }
  
  export default App;