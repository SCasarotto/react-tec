//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import styles from './styles'

import TEPopup from './../TEPopup'
import TEButton from './../../Form/TEButton'

class TEAlert extends Component {
	render() {
		const { title, message, onClick, buttonTitle, children, visible } = this.props

		return (
			<TEPopup visible={visible} contentStyles={styles.content}>
				<div style={styles.title}>{title}</div>
				<div style={styles.message}>{message}</div>
				{children}
				<TEButton onClick={onClick} style={styles.button}>
					{buttonTitle}
				</TEButton>
			</TEPopup>
		)
	}
}

TEAlert.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	buttonTitle: PropTypes.string,
}

TEAlert.defaultProps = {
	buttonTitle: 'Okay',
}

export default Radium(TEAlert)
