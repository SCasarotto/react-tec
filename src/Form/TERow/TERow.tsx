import React from 'react'

import { Row } from './styledComponents'

export interface TERowCustomProps {
	rowSize?: 'full' | 'two-third' | 'half' | 'third' | 'forth' | 'condensed'
	last?: boolean
}
export interface TERowProps
	extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		TERowCustomProps {
	ref?:
		| ((instance: HTMLDivElement | null) => void)
		| React.RefObject<HTMLDivElement>
		| null
		| undefined
}
export const TERow: React.FC<TERowProps> = React.forwardRef((props, ref) => {
	const { rowSize = 'full', last = false, className = '', ...rest } = props
	return (
		<Row className={`TERow ${className}`} rowSize={rowSize} last={last} ref={ref} {...rest} />
	)
})
