import React from 'react'

import { Row } from './styledComponents'

export type TEFormRowSize = 'full' | 'two-third' | 'half' | 'third' | 'forth' | 'condensed'
export interface TERowCustomProps {
	rowSize?: TEFormRowSize
	last?: boolean
}
export interface TERowProps extends React.HTMLAttributes<HTMLDivElement>, TERowCustomProps {}
/**
 *
 * Form row component. `TERow` provides a simple way to layout form rows. Easily enabling multiple inputs or buttons on the same row.
 *
 */
export const TERow = React.forwardRef<HTMLDivElement, TERowProps>((props, ref) => {
	const { rowSize = 'full', className = '', ...rest } = props
	return <Row className={`TERow ${className}`} rowSize={rowSize} ref={ref} {...rest} />
})
