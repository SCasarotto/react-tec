//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import TEPopup from './../TEPopup'
import TEForm from './../../Form/TEForm'
import TEButton from './../../Form/TEButton'
import TESubmit from './../../Form/TESubmit'

import styles from './styles'

class TEPopupForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		const { onSubmit } = this.props
		onSubmit()
	}
	render() {
		const { visible, onClose, onSubmitTitle, children } = this.props

		return (
			<TEPopup visible={visible} contentStyles={styles.content}>
				<TEForm onSubmit={this.handleSubmit}>
					<div style={styles.container}>{children}</div>
					<div style={styles.buttonContainer}>
						<TEButton onClick={onClose} style={styles.formButton('left')}>
							Cancel
						</TEButton>
						<TESubmit style={styles.formButton('right')}>{onSubmitTitle}</TESubmit>
					</div>
				</TEForm>
			</TEPopup>
		)
	}
}

TEPopupForm.propTypes = {
	visible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
}

TEPopupForm.defaultProps = {
	visible: false,
}

export default Radium(TEPopupForm)
