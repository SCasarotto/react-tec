import React from 'react'

import { TERow, TERowCustomProps } from '../TERow'
import { TELabel, TELabelCustomProps } from '../TELabel'
import { TETextarea, TETextareaProps } from '../TETextarea'

export interface TETextareaRowProps
	extends TERowCustomProps,
		TELabelCustomProps,
		TETextareaProps {
	labelForKey: string
}

export const TETextareaRow: React.FC<TETextareaRowProps> = (props) => {
	const {
		rowSize,
		last,
		className = '',
		title,
		onChange,
		disabled,
		value,
		required,
		labelForKey,
		...rest
	} = props

	return (
		<TERow
			rowSize={rowSize}
			last={last}
			className={`TEInputRow ${className}`}
		>
			{title && (
				<TELabel
					htmlFor={labelForKey}
					required={required}
					disabled={disabled}
					className="TEInputRowTitle"
				>
					{title}
				</TELabel>
			)}
			<TETextarea
				value={value}
				onChange={onChange}
				id={labelForKey}
				disabled={disabled}
				className="TEInputRowInput"
				{...rest}
			/>
		</TERow>
	)
}
