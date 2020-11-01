import React from 'react'

import { TERow, TERowCustomProps } from '../TERow'
import { TELabel, TELabelCustomProps } from '../TELabel'
import { TESearchSelectInput } from '../TESearchSelectInput'

// import 'react-power-select/dist/react-power-select.css'
//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//
export interface TESearchSelectRowProps extends TERowCustomProps, TELabelCustomProps {
	labelForKey: string
	[key: string]: any
}
export const TESearchSelectRow = React.forwardRef<any, TESearchSelectRowProps>((props, ref) => {
	const { rowSize, last, className = '', title, labelForKey, ...rest } = props

	return (
		<TERow rowSize={rowSize} last={last} className={`TESearchSelectRow ${className}`}>
			{title && (
				<TELabel
					htmlFor={labelForKey}
					required={rest.required}
					disabled={rest.disabled}
					className='TESearchSelectRowTitle'
				>
					{title}
				</TELabel>
			)}
			<TESearchSelectInput
				id={labelForKey}
				className='TESearchSelectRowInput'
				ref={ref}
				{...rest}
			/>
		</TERow>
	)
})
