import React from 'react'

import { Button } from './styledComponents'

export interface TEButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	//TODO: Fix this. styled-components is weird with refs
	ref?:
		| ((instance: HTMLButtonElement | null) => void)
		| React.RefObject<HTMLButtonElement>
		| null
		| undefined
	// ref?: any
}
export const TEButton: React.FC<TEButtonProps> = React.forwardRef((props, ref) => {
	const { className = '', type = 'button', ...rest } = props
	return <Button className={`TEButton ${className}`} type={type} ref={ref} {...rest} />
})
