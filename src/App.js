import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particleOptions = { 
  particles: {
    number: {
      value: 160,
      density: {
          enable: false
      }
  },
    size: {
      value: 3,
      random: true,
      anim: {
          speed: 4,
          size_min: 0.3
      }
  },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blue: 5
      }
    }
  },
  interactivity: {
    events: {
        onhover: {
            enable: true,
            mode: "repulse"
        },
        onclick: {
            enable: true,
            mode: "repulse"
        }
    },
    modes: {
        bubble: {
            distance: 250,
            duration: 2,
            size: 0,
            opacity: 0
        },
        repulse: {
            distance: 200,
            duration: 6
        }
    }
  }
}
    

function App() {
  return (
    <div className="App"> 
      <Navigation />
      <Particles className='particles' params={ particleOptions }/>
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
