//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import styles from './styles'

class TEPopup extends Component {
	render() {
		const { visible, contentStyles, children } = this.props

		return (
			<div className="TEAlert" style={styles.background(visible)}>
				<div style={{ ...styles.content, ...contentStyles }}>{children}</div>
			</div>
		)
	}
}

TEPopup.propTypes = {
	visible: PropTypes.bool.isRequired,
}

TEPopup.defaultProps = {
	visible: false,
}

export default Radium(TEPopup)
