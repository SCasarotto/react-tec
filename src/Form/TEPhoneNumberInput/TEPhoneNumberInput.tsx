import React, { RefObject } from 'react'
import PhoneInput, { PhoneInputProps } from 'react-phone-number-input'
import { PhoneNumberInput } from './styledComponents'

export interface TEPhoneNumberInputProps extends PhoneInputProps {
	//TODO: Fix ref typing but it works for now
	ref?: ((instance: PhoneInput | null) => void) | RefObject<PhoneInput> | null
}
export const TEPhoneNumberInput: React.FC<TEPhoneNumberInputProps> = React.forwardRef(
	(props, ref) => {
		const { className = '', ...rest } = props
		return (
			<PhoneNumberInput className={`TEPhoneNumberInput ${className}`} ref={ref} {...rest} />
		)
	},
)
