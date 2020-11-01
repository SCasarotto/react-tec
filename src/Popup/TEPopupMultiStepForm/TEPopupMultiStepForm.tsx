import React from 'react'

import { TEMultiStepForm, TEMultiStepFormProps } from '../../Form/TEMultiStepForm'

import { Popup } from './styledComponents'
import { TEPopupProps } from './../TEPopup'

export interface TEPopupMultiStepFormProps extends TEPopupProps, TEMultiStepFormProps {
	onClose(): void
	onSubmit(): Promise<any>
}
/**
 *
 * TEPopupMultiStepForm is a combination of `TEPopup` and `TEMultiStepForm`. Besides the props below, reference `TEMultiStepForm` for additional props.
 *
 */
export const TEPopupMultiStepForm = React.forwardRef<HTMLFormElement, TEPopupMultiStepFormProps>(
	(props, ref) => {
		const { visible, onClose, className = '', ...rest } = props

		return (
			<Popup visible={visible} className={`TEPopupMultiStepForm ${className}`}>
				<TEMultiStepForm
					handleCancelOnClick={onClose}
					className='TEPopupMultiStepFormMultiStepForm'
					ref={ref}
					{...rest}
				/>
			</Popup>
		)
	},
)

TEPopupMultiStepForm.defaultProps = {
	visible: false,
}
