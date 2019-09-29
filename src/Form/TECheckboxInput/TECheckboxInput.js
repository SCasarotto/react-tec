import React from 'react'

import { Input } from './styledComponents'

const TECheckboxInput = (props) => {
	const { className = '', ...rest } = props
	return <Input className={`TECheckboxInput ${className}`} {...rest} type='checkbox' />
}

export default TECheckboxInput
