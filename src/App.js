import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/face-recognition/FaceRecognition';
import Register from './components/register/Register';
import SignIn from './components/SignIn/SignIn';
import Particles from 'react-particles-js';
import './App.css';

const particleOptions = { 
  particles: {
    number: {
      value: 80,
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
  }
}

const initState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin', //keeps track of where we are on the page
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin', //keeps track of where we are on the page
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
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
      fetch('http://localhost:3000/imageurl', {
            method: 'post',
              headers: {'Content-Type': 'application/json'}, // header takes an object
              body: JSON.stringify({
                  input: this.state.input
              })
          })
      .then(response => response.json())
      .then(response =>  {
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
            headers: {'Content-Type': 'application/json'}, // header takes an object
            body: JSON.stringify({
                id: this.state.user.id
            })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count}))
        })
      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
  .catch(error => console.log(error));
}


  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initState)
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
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>   
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>  
          : (
            route === 'signin' 
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )         
        }    
      </div>
    )
  }  
}

export default App;
