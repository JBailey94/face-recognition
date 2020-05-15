import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/face-recognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
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
    
// Clarifai initialize
const app = new Clarifai.App({
  apiKey: '98d70806f17a461a8e9f977797f853ae'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    console.log(event);
    this.setState({input: event.target.value})
  }

  // face
  // https://am23.mediaite.com/tms/cnt/uploads/2020/03/trump-coronavirus-face-touch.jpg

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        // there was an error
      }
    );
  }

  render() {
    return(
      <div className="App"> 
        <Navigation />      
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <Particles className='particles' params={ particleOptions } />
        <FaceRecognition imageUrl={this.state.imageUrl} />
    </div>
    )
  }  
}

export default App;
