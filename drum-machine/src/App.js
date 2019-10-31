import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import DrumPads from './DrumPads';
import Display from './Display';

class App extends Component {
  state = {
    pads: [
      {
        label: "Q",
        desc:"Heater-1",
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      },
      {
        label:"W",
        desc: "Heater-2",
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      },
      {
        label: "E",
        desc: "Heater-3",
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      },
      {
        label: "A",
        desc: "Heater-4",
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      },
      {
        label: "S",
        desc: "Heater-6",
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      },
      {
        label: "D",
        desc: "Open-HH",
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      },
      {
        label: "Z",
        desc: "Kick-and-Hat",
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      },
      {
        label: "X",
        desc: "Kick",
        audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      },
      {
        label: "C",
        desc: "Closed-HH",
        audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      }
    ],
    currentAudioDesc: ""
  };

  handleDisplayChange = (keyId) => {
    let currentKey = keyId;
    let newDesc = this.state.pads.filter( (pad) => pad.label === currentKey).map( (pad) => pad.desc)[0];
    this.setState({currentAudioDesc: newDesc});
  }

  render() {
    return (
      <Container id="drum-machine">
          <DrumPads pads={this.state.pads} onClickOrKey={this.handleDisplayChange} />
          <Display desc={this.state.currentAudioDesc} />      
      </Container>
  )};
}

export default App;
