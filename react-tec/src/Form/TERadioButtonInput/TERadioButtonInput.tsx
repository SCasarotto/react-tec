import React from 'react'

import { Input } from './styledComponents'

const TERadioButtonInput = (props) => {
	const { className = '', ...rest } = props
	return <Input className={`TERadioButtonInput ${className}`} {...rest} type='radio' />
}

export default TERadioButtonInput
