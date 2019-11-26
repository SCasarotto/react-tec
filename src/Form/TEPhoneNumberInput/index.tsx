import React from 'react'

import { PhoneNumberInput } from './styledComponents'

//AT this time there is no type definitions for react-phone-number-input: https://github.com/catamphetamine/react-phone-number-input
// Some options: https://github.com/catamphetamine/react-phone-number-input/issues/195
export interface TEPhoneNumberInputProps {
	[key: string]: any
	onChange(value: string): void
	value: string
	className?: string
}
export const TEPhoneNumberInput: React.FC<TEPhoneNumberInputProps> = (props) => {
	const { className = '', ...rest } = props
	return <PhoneNumberInput className={`TEPhoneNumberInput ${className}`} {...rest} />
}
