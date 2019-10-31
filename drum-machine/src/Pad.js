import React, { Component } from 'react';

class Pad extends Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePadDown = this.handlePadDown.bind(this);
    this.handlePadUp = this.handlePadUp.bind(this);
  }

  playSound = (k) => {
    const kID = k.toUpperCase();
    const audio = document.getElementById(this.props.id);
    audio.play();
    this.props.onClickOrKey(kID);
  }

  handlePadUp = (id) => {
    document.getElementById(id).setAttribute("style", "background-color:gray; box-shadow:5px 2px 2px black");
  }

  handlePadDown = (id) => {
    document.getElementById(id).setAttribute("style", "background-color:black; box-shadow:none");
    setTimeout(this.handlePadUp, 200, id);
  }

  handleClick = (evt) => {
    this.handlePadDown(evt.target.id);
    this.playSound(evt.target.textContent);
  }

  handleKeyPress = (evt) => {
    if (evt.key === this.props.id.toLowerCase() || evt.key === this.props.id) {
      this.handlePadDown(this.props.desc);
      this.playSound(evt.key);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentDidUpdate() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return(
      <div className="drum-pad" id={this.props.desc} onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
        {this.props.id}
        <audio src={this.props.audioSRC} className="clip" id={this.props.id} type="audio/mp3">
        </audio>
      </div>
    );
  }
}

export default Pad;