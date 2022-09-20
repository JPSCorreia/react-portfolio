import Navbar from './components/Navbar'
import Particle from "./components/Particle";
import Home from "./components/Home";
import Emporium from "./components/Emporium";
import TLDReddit from "./components/TLDReddit";
import React from 'react'
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {

  function useScrollToTop() {
    const { pathname } = useLocation(); 
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  useScrollToTop();
  
  return (
    <>
      <Particle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route exact path="/emporium" element={ <Emporium /> }/>
        <Route exact path="/tldreddit" element={ <TLDReddit /> }/>
        <Route 
          path="*" 
          element={ <NotFound /> }
        />
      </Routes>

    </>
  );
}

export default App;
