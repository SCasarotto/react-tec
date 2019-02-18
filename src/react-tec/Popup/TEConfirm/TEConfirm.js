//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import styles from './styles'

import TEPopup from './../TEPopup'
import TEButton from './../../Form/TEButton'

class TEConfirm extends Component {
	render() {
		const {
			title,
			message,
			leftOnClick,
			leftButtonTitle,
			rightOnClick,
			rightButtonTitle,
			children,
			visible,
		} = this.props

		return (
			<TEPopup visible={visible} contentStyles={styles.content}>
				<div style={styles.title}>{title}</div>
				<div style={styles.message}>{message}</div>
				{children}
				<div style={styles.buttonContainer}>
					<TEButton
						onClick={leftOnClick}
						style={{ ...styles.button, ...styles.leftButton }}
					>
						{leftButtonTitle}
					</TEButton>
					<TEButton
						onClick={rightOnClick}
						style={{ ...styles.button, ...styles.rightButton }}
					>
						{rightButtonTitle}
					</TEButton>
				</div>
			</TEPopup>
		)
	}
}

TEConfirm.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	leftOnClick: PropTypes.func.isRequired,
	leftButtonTitle: PropTypes.string,
	rightOnClick: PropTypes.func.isRequired,
	rightButtonTitle: PropTypes.string,
}

TEConfirm.defaultProps = {
	leftButtonTitle: 'Cancel',
}

export default Radium(TEConfirm)
