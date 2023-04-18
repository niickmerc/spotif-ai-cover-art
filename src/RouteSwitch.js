import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";

function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route />
                <Route />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;