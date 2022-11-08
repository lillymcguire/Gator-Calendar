import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Authentication() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <h1> Login/logout base</h1>
                } />
            </Routes>
        </Router>
    )
}

export default Authentication;