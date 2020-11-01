import React from 'react'

import { Row } from './styledComponents'

export type TEFormRowSize = 'full' | 'two-third' | 'half' | 'third' | 'forth' | 'condensed'
export interface TERowCustomProps {
	rowSize?: TEFormRowSize
	last?: boolean
}
export interface TERowProps extends React.HTMLAttributes<HTMLDivElement>, TERowCustomProps {}
export const TERow = React.forwardRef<HTMLDivElement, TERowProps>((props, ref) => {
	const { rowSize = 'full', className = '', ...rest } = props
	return <Row className={`TERow ${className}`} rowSize={rowSize} ref={ref} {...rest} />
})
