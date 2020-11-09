import React from 'react'

import { TEForm, TEFormProps } from '../../Form/TEForm'

import { Popup, FormContent, ButtonContainer, LeftButton, RightButton } from './styledComponents'
import { TEPopupProps } from './../TEPopup'

export interface TEPopupFormProps extends TEPopupProps, TEFormProps {
	onClose(): void
	onCloseTitle?: string
	onSubmitTitle?: string
	submitButtonId?: string
}
/**
 *
 * `TEPopupForm` is a combination of `TEForm` and `TEPopup`.
 *
 */
export const TEPopupForm = React.forwardRef<HTMLFormElement, TEPopupFormProps>((props, ref) => {
	const {
		visible,
		onClose,
		onCloseTitle,
		onSubmitTitle,
		className = '',
		submitButtonId,
		children,
		...rest
	} = props

	return (
		<Popup visible={visible} className={`TEPopupForm ${className}`}>
			<TEForm className='TEPopupFormForm' ref={ref} {...rest}>
				<FormContent className='TEPopupFormContent'>{children}</FormContent>
				<ButtonContainer className='TEPopupFormButtonContainer'>
					<LeftButton
						onClick={onClose}
						className='TEPopupFormButton TEPopupFormLeftButton'
					>
						{onCloseTitle}
					</LeftButton>
					<RightButton
						type='submit'
						className='TEPopupFormButton TEPopupFormRightButton'
						id={submitButtonId}
					>
						{onSubmitTitle}
					</RightButton>
				</ButtonContainer>
			</TEForm>
		</Popup>
	)
})

TEPopupForm.defaultProps = {
	visible: false,
	onCloseTitle: 'Cancel',
	onSubmitTitle: 'Submit',
}
