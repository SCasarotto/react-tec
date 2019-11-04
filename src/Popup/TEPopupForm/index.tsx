import React from 'react'

import { TEForm } from '../../Form/TEForm'

import {
	Popup,
	FormContent,
	ButtonContainer,
	LeftButton,
	RightButton,
} from './styledComponents'
import { TEPopupProps } from 'Popup/TEPopup'

export interface TEPopupFormProps extends TEPopupProps {
	formName?: string
	onClose(): void
	onCloseTitle?: string
	onSubmit(): void
	onSubmitTitle?: string
	visible: boolean //I don't understand why I need this here since it is in TEPopupProps.....
}
export const TEPopupForm: React.FC<TEPopupFormProps> = (props) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { onSubmit } = props
		onSubmit()
	}

	const {
		formName,
		visible,
		onClose,
		onCloseTitle,
		onSubmitTitle,
		className = '',
		children,
		...rest
	} = props

	return (
		<Popup visible={visible} className={`TEPopupForm ${className}`}>
			<TEForm
				onSubmit={handleSubmit}
				className="TEPopupFormForm"
				id={formName}
				{...rest}>
				<FormContent className="TEPopupFormContent">
					{children}
				</FormContent>
				<ButtonContainer className="TEPopupFormButtonContainer">
					<LeftButton
						onClick={onClose}
						className="TEPopupFormButton TEPopupFormLeftButton">
						{onCloseTitle}
					</LeftButton>
					<RightButton
						form={formName}
						type="submit"
						className="TEPopupFormButton TEPopupFormRightButton">
						{onSubmitTitle}
					</RightButton>
				</ButtonContainer>
			</TEForm>
		</Popup>
	)
}

TEPopupForm.defaultProps = {
	visible: false,
	onCloseTitle: 'Cancel',
	onSubmitTitle: 'Submit',
}
