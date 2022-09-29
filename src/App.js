import Navbar from './components/Navbar'
import Home from "./components/Home";
import Emporium from "./components/Emporium";
import TLDReddit from "./components/TLDReddit";
import React from 'react'
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Loader from './components/Loader';

function App() {

  const [loaded, setLoaded] = useState(false);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

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
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#121212',
            },
          },
          fullScreen: {
            zIndex: 1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'repulse',
              },
              onHover: {
                enable: true,
                mode: 'bubble',
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              grab: {
                distance: 400,
              },
              repulse: {
                distance: 400,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: 'ease-out-quad',
                  selectors: [],
                },
              },
            },
          },
          particles: {
            color: {
              value: '#67E8F9',
            },
            links: {
              color: {
                value: '#67E8F9',
              },
              distance: 150,
              opacity: 0.4,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 600,
                },
              },
              enable: true,
              outModes: {
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out',
              },
              random: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
              },
              value: 30,
            },
            opacity: {
              random: {
                enable: true,
              },
              value: {
                min: 0,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                speed: 4,
                minimumValue: 0.3,
              },
            },
          },
        }}
      />
      {loaded ? (
        <>
          <Navbar />
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
