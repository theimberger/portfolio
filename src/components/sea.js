import React, { Component } from 'react';
import SeaClass from './sea-class'

class Sea extends Component {
  state = {
    seaInstance: null
  }

  componentDidMount() {
    this.setState({ seaInstance: new SeaClass(this.seaRef) })
  }

  seaRef = null

  render () {
    return (
      <canvas
				id='sea'
				width='0'
        height='0'
        ref={node => this.seaRef = node }
			/>
    );
  }
}

export default Sea;
