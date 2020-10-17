import React from 'react'

import { TEMultiStepForm, TEMultiStepFormProps } from '../../Form/TEMultiStepForm'

import { Popup } from './styledComponents'
import { TEPopupProps } from './../TEPopup'

export interface TEPopupMultiStepFormProps extends TEPopupProps, TEMultiStepFormProps {
	onClose(): void
	onSubmit(): Promise<any>
}
export const TEPopupMultiStepForm: React.FC<TEPopupMultiStepFormProps> = React.forwardRef(
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
