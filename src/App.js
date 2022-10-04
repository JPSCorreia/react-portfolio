import Navbar from './components/Navbar'
import Home from "./components/Home";
import Emporium from "./components/Emporium";
import TLDReddit from "./components/TLDReddit";
import React from 'react'
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import ParticleContainer from './components/ParticleContainer';
import Loader from './components/Loader';

function App() {

  const [loaded, setLoaded] = useState(false);
  const particlesLoaded = (container) => {
    setLoaded(true);
  };

  function useScrollToTop() {
    const { pathname } = useLocation(); 
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  useScrollToTop();
  
  return (
    <>
      <ParticleContainer particlesLoaded={particlesLoaded} />
      {loaded ? (
        <>
          <Navbar className="max-w-screen" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/emporium" element={<Emporium />} />
            <Route exact path="/tldreddit" element={<TLDReddit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
