import React from 'react'

import { Button } from './styledComponents'

export interface TEMenuButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	//TODO: Fix this. styled-components is weird with refs
	ref?: any
}
export const TEMenuButton: React.FC<TEMenuButtonProps> = (props) => {
	const { className = '', type = 'button', ...rest } = props
	return <Button className={`TEButton ${className}`} type={type} {...rest} />
}
