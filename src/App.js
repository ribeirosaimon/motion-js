import './App.css';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import MotionRouter from "./app/router/Router";
import MotionToastContainer from "./app/components/tooltip/MotionToastContainer";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div className="App">
            <React.StrictMode>
                <BrowserRouter>
                    <MotionRouter/>
                </BrowserRouter>
            </React.StrictMode>
            <MotionToastContainer/>
        </div>
    );
}

export default App;
