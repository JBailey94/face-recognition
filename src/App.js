import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/face-recognition/FaceRecognition';
import Register from './components/register/Register';
import SignIn from './components/SignIn/SignIn';
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
            distance: 100,
            duration: 2,
            size: 0,
            opacity: 0
        },
        repulse: {
            distance: 100,
            duration: 2
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
      imageUrl: '',
      box: {},
      route: 'signin', //keeps track of where we are on the page
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    console.log(event);
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(error => console.log(error));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        <Particles className='particles' params={ particleOptions } />
        { route === 'home' ?
          <div>
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>   
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>  
          : (
            route === 'signin' 
            ? <SignIn onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />
          )         
        }    
      </div>
    )
  }  
}

export default App;
