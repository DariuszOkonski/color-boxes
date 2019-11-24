import React, { Component } from 'react';
import Box from './Box';
import uuid from 'uuid/v1';
import './BoxContainer.css';

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 16,
    allColors: ["purple", "magenta", "violet", "pink", "green", "yellow", "red", "blue", "brown", "crimson", "royalblue"],
  }

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() =>
      <Box key={uuid()} colors={this.props.allColors} />)

    return (
      <div className="BoxContainer">
        {
          boxes
        }
      </div>
    );
  }
}

export default BoxContainer;