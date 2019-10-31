import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {

  static propTypes = {
    desc: PropTypes.string
  };

  render() {
    const {
      desc
    } = this.props;
    return (
        <div id="display">
          {desc}
        </div>
    );
  }
}

export default Display;