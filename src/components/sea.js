import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SeaClass from './sea-class'

class Sea extends Component {
  componentDidMount() {
    this.seaInstance = new SeaClass(this.seaRef)
  }

  seaInstance = null
  seaRef = null

  render () {
    const {
      projectsVisible,
    } = this.props

    return (
      <canvas
        id='sea'
        className={`${projectsVisible ? 'moved-down' : ''}`}
				width='0'
        height='0'
        ref={node => this.seaRef = node }
			/>
    );
  }
}

Sea.propTypes = {
	projectsVisible: PropTypes.bool.isRequired,
}

export default Sea;
