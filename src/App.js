import './App.css';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import MotionRouter from "./app/router/Router";

function App() {
    return (
        <div className="App">
            <React.StrictMode>
                <BrowserRouter>
                    <MotionRouter/>
                </BrowserRouter>
            </React.StrictMode>
        </div>
    );
}

export default App;
