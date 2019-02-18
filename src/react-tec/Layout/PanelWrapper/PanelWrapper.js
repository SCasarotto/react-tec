//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import Radium from 'radium'

import styles from './styles'

class PannelWrapper extends Component {
	render() {
		const { style } = this.props
		return <div style={{ ...styles.container, ...style }}>{this.props.children}</div>
	}
}

PannelWrapper.propTypes = {}

PannelWrapper.defaultProps = {}

export default Radium(PannelWrapper)
