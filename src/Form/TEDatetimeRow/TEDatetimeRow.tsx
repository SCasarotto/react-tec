import React from 'react'
import ReactDatePicker from 'react-datepicker'

import { TERow, TERowCustomProps } from '../TERow'
import { TELabel, TELabelCustomProps } from '../TELabel'
import { TEDatetimeInput, TEDatetimeInputProps } from '../TEDatetimeInput'

export interface TEDatetimeRowProps
	extends TERowCustomProps,
		TELabelCustomProps,
		TEDatetimeInputProps {
	labelForKey: string
}
export const TEDatetimeRow = React.forwardRef<ReactDatePicker, TEDatetimeRowProps>((props, ref) => {
	const { rowSize, last, className = '', title, labelForKey, ...rest } = props

	return (
		<TERow rowSize={rowSize} last={last} className={`TEDatetimeRow ${className}`}>
			{title && (
				<TELabel
					htmlFor={labelForKey}
					required={rest.required}
					disabled={rest.disabled}
					className='TEDatetimeRowTitle'
				>
					{title}
				</TELabel>
			)}
			<TEDatetimeInput
				id={labelForKey}
				{...rest}
				className='TEDatetimeRowDateInput'
				ref={ref}
			/>
		</TERow>
	)
})
