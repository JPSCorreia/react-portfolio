// import React from 'react'
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const Particle = () => {

//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };


//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={ 
//         {
//           "background": {
//             "color": {
//               "value": "#121212"
//             },
//           },
//           "fullScreen": {
//             "zIndex": 1
//           },
//           "interactivity": {
//             "events": {
//               "onClick": {
//                 "enable": true,
//                 "mode": "repulse"
//               },
//               "onHover": {
//                 "enable": true,
//                 "mode": "bubble"
//               }
//             },
//             "modes": {
//               "bubble": {
//                 "distance": 250,
//                 "duration": 2,
//                 "opacity": 0,
//                 "size": 0,
//                 "divs": {
//                   "distance": 200,
//                   "duration": 0.4,
//                   "mix": false,
//                   "selectors": []
//                 }
//               },
//               "grab": {
//                 "distance": 400
//               },
//               "repulse": {
//                 "distance": 400,
//                 "divs": {
//                   "distance": 200,
//                   "duration": 0.4,
//                   "factor": 100,
//                   "speed": 1,
//                   "maxSpeed": 50,
//                   "easing": "ease-out-quad",
//                   "selectors": []
//                 }
//               }
//             }
//           },
//           "particles": {
//             "color": {
//               "value": "#67E8F9",
//             },
//             "links": {
//               "color": {
//                 "value": "#67E8F9"
//               },
//               "distance": 150,
//               "opacity": 0.4
//             },
//             "move": {
//               "attract": {
//                 "rotate": {
//                   "x": 600,
//                   "y": 600
//                 }
//               },
//               "enable": true,
//               "outModes": {
//                 "bottom": "out",
//                 "left": "out",
//                 "right": "out",
//                 "top": "out"
//               },
//               "random": true,
//               "speed": 1
//             },
//             "number": {
//               "density": {
//                 "enable": true
//               },
//               "value": 30
//             },
//             "opacity": {
//               "random": {
//                 "enable": true
//               },
//               "value": {
//                 "min": 0,
//                 "max": 1
//               },
//               "animation": {
//                 "enable": true,
//                 "speed": 1,
//                 "minimumValue": 0
//               }
//             },
//             "size": {
//               "random": {
//                 "enable": true
//               },
//               "value": {
//                 "min": 1,
//                 "max": 3
//               },
//               "animation": {
//                 "speed": 4,
//                 "minimumValue": 0.3
//               }
//             }
//           }
//         }}
//     />
//   )
// }

// export default Particle


// options = {
//   {
//     background: {
//       color: {
//         value: "#121212",
//       },
//     },
//     fpsLimit: 120,
//     interactivity: {
//       events: {
//         onClick: {
//           enable: true,
//           mode: "push",
//         },
//         onHover: {
//           enable: false,
//           mode: "repulse",
//         },
//         resize: true,
//       },
//       modes: {
//         push: {
//           quantity: 4,
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4,
//         },
//       },
//     },
//     fullScreen: {
//       zIndex: -1,
//       enable: false
//     },
//     particles: {
//       color: {
//         value: "#30aa50",
//       },
//       links: {
//         color: "#67E8F9",
//         distance: 150,
//         enable: true,
//         opacity: 0.75,
//         width: 0.75,
//       },
//       collisions: {
//         enable: true,
//       },
//       move: {
//         direction: "none",
//         enable: true,
//         outModes: {
//           default: "bounce",
//         },
//         random: false,
//         speed: 2,
//         straight: false,
//       },
//       number: {
//         density: {
//           enable: true,
//           area: 800,
//         },
//         value: 40,
//       },
//       opacity: {
//         value: 0.1,
//       },
//       shape: {
//         type: "circle",
//       },
//       size: {
//         value: { min: 1, max: 5 },
//       },
//     },
//     detectRetina: true,
//   }
// }