import React from 'react'

import { Input } from './styledComponents'

export interface TERadioButtonInputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
}
const TERadioButtonInput: React.FC<TERadioButtonInputProps> = (props) => {
	const { className = '', ...rest } = props
	return (
		<Input
			className={`TERadioButtonInput ${className}`}
			{...rest}
			type="radio"
		/>
	)
}

export default TERadioButtonInput
