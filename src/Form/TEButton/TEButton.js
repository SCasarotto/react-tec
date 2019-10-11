import React from 'react'

import { Button } from './styledComponents'

const TEButton = (props) => {
	const { className = '', type = 'button', ...rest } = props
	return <Button className={`TEButton ${className}`} type={type} {...rest} />
}

export default TEButton
