import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';

class Display extends Component {

  static propTypes = {
    desc: PropTypes.string
  };

  render() {
    const {
      desc
    } = this.props;
    return (
      <Row>
        <div id="display">
          {desc}
        </div>
      </Row>
    );
  }
}

export default Display;