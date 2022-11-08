import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <Home />
                } />
                <Route path="/home" element={
                    <h1> Hey </h1>
                } />
            </Routes>
        </Router>
    )
}

export default App;