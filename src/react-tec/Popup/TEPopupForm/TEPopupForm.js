//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import TEForm from './../../Form/TEForm'

import { Popup, FormContent, ButtonContainer, LeftButton, RightButton } from './styledComponents'

const TEPopupForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const { onSubmit } = props
		onSubmit()
	}

	const { visible, onClose, onCancelTitle, onSubmitTitle, children } = props

	return (
		<Popup visible={visible}>
			<TEForm onSubmit={handleSubmit}>
				<FormContent>{children}</FormContent>
				<ButtonContainer>
					<LeftButton onClick={onClose}>{onCancelTitle}</LeftButton>
					<RightButton type="submit">{onSubmitTitle}</RightButton>
				</ButtonContainer>
			</TEForm>
		</Popup>
	)
}

TEPopupForm.propTypes = {
	visible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
}

TEPopupForm.defaultProps = {
	visible: false,
	onCancelTitle: 'Cancel',
	onSubmitTitle: 'Submit',
}

export default TEPopupForm
