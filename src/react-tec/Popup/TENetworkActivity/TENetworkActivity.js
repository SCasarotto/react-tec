//
//TE Version 0.1.0
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

import Radium from 'radium'

import TEPopup from './../TEPopup'
import TESpinner from './../../TESpinner'

class TENetworkActivity extends Component {
	render() {
		const { message, visible } = this.props

		return (
			<TEPopup visible={visible} contentStyles={styles.content}>
				{visible && <TESpinner size="large" wrapperStyle={styles.spinner} />}
				<div style={styles.message}>{message}</div>
			</TEPopup>
		)
	}
}

TENetworkActivity.propTypes = {
	numberOfRings: PropTypes.number,
}

TENetworkActivity.defaultProps = {}

export default Radium(TENetworkActivity)
