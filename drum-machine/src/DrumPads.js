import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Pad from './Pad';

class DrumPads extends Component {
 
  static propTypes = {
    pads: PropTypes.arrayOf(PropTypes.object),
    onClickOrKey: PropTypes.func
  };

  render() {
    const {
      pads,
      onClickOrKey
     } = this.props;

    return (
      <div id="drum-pads">
        <Row id="drum-pads-1">
            {pads.filter( (pad, index) => index < 3).map( (pad, index) => 
              <Pad 
                id={pad.label}
                desc={pad.desc}
                key={index.toString()}
                audioSRC={pad.audio}
                onClickOrKey={onClickOrKey}
              />
            )}
        </Row>
        <Row id="drum-pads-2">
          {pads.filter( (pad, index) => index >= 3 && index < 6).map( (pad, index) =>
            <Pad 
              id={pad.label}
              desc={pad.desc}
              key={index.toString()}
              audioSRC={pad.audio}
              onClickOrKey={onClickOrKey}
            />
          )}
        </Row>
        <Row id="drum-pads-3">
        {pads.filter( (pad, index) => index >= 6 && index < 9).map( (pad, index) =>
            <Pad 
              id={pad.label}
              desc={pad.desc}
              key={index.toString()}
              audioSRC={pad.audio}
              onClickOrKey={onClickOrKey}
            />
          )}
        </Row>
      </div>
    );
  }
}

export default DrumPads;