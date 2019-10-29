import React from 'react'
import PropTypes from 'prop-types'

import TEForm from '../../Form/TEForm'

import {
	Popup,
	FormContent,
	ButtonContainer,
	LeftButton,
	RightButton,
} from './styledComponents'

const TEPopupForm = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const { onSubmit } = props
		onSubmit()
	}

	const {
		visible,
		onClose,
		onCancelTitle,
		onSubmitTitle,
		className = '',
		children,
	} = props

	return (
		<Popup visible={visible} className={`TEPopupForm ${className}`}>
			<TEForm onSubmit={handleSubmit} className="TEPopupFormForm">
				<FormContent className="TEPopupFormContent">
					{children}
				</FormContent>
				<ButtonContainer className="TEPopupFormButtonContainer">
					<LeftButton
						onClick={onClose}
						className="TEPopupFormButton TEPopupFormLeftButton">
						{onCancelTitle}
					</LeftButton>
					<RightButton
						type="submit"
						className="TEPopupFormButton TEPopupFormRightButton">
						{onSubmitTitle}
					</RightButton>
				</ButtonContainer>
			</TEForm>
		</Popup>
	)
}

TEPopupForm.propTypes = {
	visible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onCloseTitle: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	onSubmitTitle: PropTypes.string,
}

TEPopupForm.defaultProps = {
	visible: false,
	onCancelTitle: 'Cancel',
	onSubmitTitle: 'Submit',
}

export default TEPopupForm
