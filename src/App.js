import React , {useEffect} from "react";
import Navbar from "./features/navbar/Navbar";
import Background from './features/popups/Background'
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import OurMeals from "./pages/OurMeals";
import OurOffers from "./pages/OurOffers";
import { useSelector, useDispatch } from 'react-redux';
import AdminDashboard from "./pages/AdminDashboard";
import Alert from "./features/popups/Alert";
import {closeAlertAction} from "./actions/alertActions"

function App() {

    const popup = useSelector(state => state.popup);
    const alert = useSelector(state => state.alert);

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(closeAlertAction())
        }, 2000);
    }, [alert])

    return (
        <div className="content mx-auto overflow-hidden">
            <React.Fragment>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='our-meals' element={<OurMeals />} />
                        <Route path='our-offers' element={<OurOffers />} />
                        <Route path='admin/dashboard' element={<AdminDashboard />} />
                    </Routes>
                </Router>
            </React.Fragment>

            {/* popups */}
            {popup && <Background/>}
            {/* alert */}
            <Alert message={alert} opacity={alert ? "1":"0"} />
        </div>
    );
  }
  
  export default App;