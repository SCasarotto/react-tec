import React from 'react'

import { TERow, TERowCustomProps } from './../TERow'
import { TELabel, TELabelCustomProps } from './../TELabel'
import { TESelect, TESelectProps } from './../TESelect'

export interface TESelectRowProps extends TERowCustomProps, TELabelCustomProps, TESelectProps {
	labelForKey: string
	title?: string
}

export const TESelectRow: React.FC<TESelectRowProps> = React.forwardRef((props, ref) => {
	const { rowSize, last, className = '', title, disabled, required, labelForKey, ...rest } = props

	return (
		<TERow rowSize={rowSize} last={last} className={`TEInputRow ${className}`}>
			{title && (
				<TELabel
					htmlFor={labelForKey}
					required={required}
					disabled={disabled}
					className='TEInputRowTitle'
				>
					{title}
				</TELabel>
			)}
			<TESelect disabled={disabled} ref={ref} {...rest} />
		</TERow>
	)
})
