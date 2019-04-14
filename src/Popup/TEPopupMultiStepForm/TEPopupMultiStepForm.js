//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import TEMultiStepForm from './../../Form/TEMultiStepForm'

import { Popup } from './styledComponents'

const TEPopupMultiStepForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const { onSubmit } = props
		onSubmit()
	}
	const { visible, onClose, className, ...rest } = props

	return (
		<Popup visible={visible} className={className}>
			<TEMultiStepForm
				onSubmit={handleSubmit}
				handleCancelOnClick={onClose}
				className='TEPopupMultiStepFormMultiStepForm'
				{...rest}
			/>
		</Popup>
	)
}

TEPopupMultiStepForm.propTypes = {
	visible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
}

TEPopupMultiStepForm.defaultProps = {
	visible: false,
}

export default TEPopupMultiStepForm
