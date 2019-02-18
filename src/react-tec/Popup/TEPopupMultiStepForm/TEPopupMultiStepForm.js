//
//TE Version 0.2.0
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import TEPopup from './../TEPopup'
import TEMultiStepForm from './../../Form/TEMultiStepForm'

import styles from './styles'

class TEPopupMultiStepForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		const { onSubmit } = this.props
		onSubmit()
	}
	render() {
		const { visible, onClose, ...rest } = this.props

		return (
			<TEPopup visible={visible} contentStyles={styles.content}>
				<TEMultiStepForm
					onSubmit={this.handleSubmit}
					handleCancelOnClick={onClose}
					containerStyles={styles.container}
					{...rest}
				/>
			</TEPopup>
		)
	}
}

TEPopupMultiStepForm.propTypes = {
	visible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
}

TEPopupMultiStepForm.defaultProps = {
	visible: false,
}

export default Radium(TEPopupMultiStepForm)
