import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route  path="/about" element= { <About />}>
         
        </Route>
        <Route  path="/login" element={ <Login />}>
         
        </Route>
        <Route path="/" element={ <Home />}>
         
        </Route>
      </Routes>
    </div>
  );
}

export default App;