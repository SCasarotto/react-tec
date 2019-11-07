import React from 'react'

import {
	TEMultiStepForm,
	TEMultiStepFormProps,
} from '../../Form/TEMultiStepForm'

import { Popup } from './styledComponents'
import { TEPopupProps } from 'Popup/TEPopup'

export interface TEPopupMultiStepFormProps
	extends TEPopupProps,
		TEMultiStepFormProps {
	onClose(): void
	onSubmit(): Promise<any>
	visible: boolean //I don't understand why I need this here since it is in TEPopupProps.....
}
export const TEPopupMultiStepForm: React.FC<TEPopupMultiStepFormProps> = (
	props,
) => {
	const { visible, onClose, className = '', ...rest } = props

	return (
		<Popup
			visible={visible}
			className={`TEPopupMultiStepForm ${className}`}
		>
			<TEMultiStepForm
				handleCancelOnClick={onClose}
				className="TEPopupMultiStepFormMultiStepForm"
				{...rest}
			/>
		</Popup>
	)
}

TEPopupMultiStepForm.defaultProps = {
	visible: false,
}