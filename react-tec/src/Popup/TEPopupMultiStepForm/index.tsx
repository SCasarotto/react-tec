import React from 'react'

import TEMultiStepForm, {
	TEMultiStepFormProps,
} from '../../Form/TEMultiStepForm'

import { Popup } from './styledComponents'
import { TEPopupProps } from 'Popup/TEPopup'

export interface TEPopupMultiStepFormProps
	extends TEPopupProps,
		TEMultiStepFormProps {
	onClose(): void
	onSubmit(): Promise<any>
}
const TEPopupMultiStepForm: React.FC<TEPopupMultiStepFormProps> = (props) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { onSubmit } = props
		onSubmit()
	}
	const { visible, onClose, className = '', ...rest } = props

	return (
		<Popup
			visible={visible}
			className={`TEPopupMultiStepForm ${className}`}>
			<TEMultiStepForm
				onSubmit={handleSubmit}
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

export default TEPopupMultiStepForm