import Navbar from './components/Navbar'
import Home from "./components/Home";
import React from 'react'
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import ParticleContainer from './components/ParticleContainer';
import Loader from './components/Loader';
import Footer from './components/Footer';
import ProjectType from './components/ProjectType';
import TLDRedditLogo from "./assets/projects/tldreddit-full.png"
import EmporiumLogo from './assets/projects/emporium-full.png';

function App() {

  const [loaded, setLoaded] = useState(false);
  const [loadedTwo, setLoadedTwo] = useState(false);
  const particlesLoaded = (container) => {
    setLoaded(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadedTwo(true);
    }, 1500);
  }, []);

  function useScrollToTop() {
    const { pathname } = useLocation(); 
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  useScrollToTop();
  
  return (
    <div className='flex flex-col' id='App'>
      <ParticleContainer particlesLoaded={particlesLoaded} />
      {(loaded && loadedTwo)? (
        <>
          <Navbar className="max-w-screen" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/emporium"
              element={
                <ProjectType
                  backgroundImageURL={EmporiumLogo}
                  navLinkToBack="/tldreddit"
                  navLinkToNext="/tldreddit"
                  AOSAnchor="#emporium"
                  projectId="emporium"
                  projectTitle="Emporium"
                  projectParagraphOne="Emporium is a PERN stack e-commerce Single Page Application. Users can register and login to the application, browse or search for products, place an order, make a purchase and finally leave a review for the products they bought. You can also add and edit different delivery addresses and switch between a light and dark color theme."
                  projectParagraphTwo="This application was built using React, bootstrapped with create-react-app and is hosted on Heroku. User registration and login are handled by Auth0, state management with Redux and routing with react-router. User interface was built with ChakraUI as a component library and using formik and yup for form management and validation. Backend API is handled by an Express.js server using various middleware libraries for server protection and token validation like helmet, hpp and csurf. Database is powered by PostgreSQL."
                  githubLink="https://github.com/JPSCorreia/emporium-shop-frontend"
                  exampleLink="https://emporium-shop.herokuapp.com/"
                />
              }
            />
            <Route
              exact
              path="/tldreddit"
              element={
                <ProjectType
                  backgroundImageURL={TLDRedditLogo}
                  navLinkToBack="/emporium"
                  navLinkToNext="/emporium"
                  AOSAnchor="#tldreddit"
                  projectId="tldreddit"
                  projectTitle="TLDReddit"
                  projectParagraphOne="TLDReddit is an alternative way to browse reddit as a Single Page Application. Users are able browse any subreddit they want, they can expand any thread and comment they want and preview all types of media without ever needing to reload the page. They can route to any subreddit and comment page by writting in the browser's address bar."
                  projectParagraphTwo="This application was built using React, bootstrapped with create-react-app and is hosted on netlify. Data handling was done by fetching data using reddit's API, routing was handled by react-router and state management by Redux. Jest was used as the testing framework and the user interface was built using Sass with no use of a component library."
                  githubLink="https://github.com/JPSCorreia/TLDReddit"
                  exampleLink="https://serene-sinoussi-2933f8.netlify.app/"
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <div className="h-[5vh] max-w-screen mx-auto w-[90%]"></div>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;

/* 
props:
techs component
background image,
project title
project paragraph 1
project paragraph 2
github link
example link
*/