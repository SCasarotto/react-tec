import React from 'react'
import PhoneInput, { PhoneInputProps } from 'react-phone-number-input'
import { PhoneNumberInput } from './styledComponents'

export interface TEPhoneNumberInputProps extends PhoneInputProps {}
export const TEPhoneNumberInput = React.forwardRef<PhoneInput, TEPhoneNumberInputProps>(
	(props, ref) => {
		const { className = '', ...rest } = props
		return (
			<PhoneNumberInput className={`TEPhoneNumberInput ${className}`} ref={ref} {...rest} />
		)
	},
)
