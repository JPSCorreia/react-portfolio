import Navbar from './components/Navbar'
import Particle from "./components/Particle";
import Home from "./components/Home";
import React from 'react'
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route 
          path="*" 
          element={ <NotFound /> }
        />
      </Routes>

    </>
  );
}

export default App;
