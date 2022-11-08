import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                
            </Routes>
        </Router>
    )
}

export default Rotas;