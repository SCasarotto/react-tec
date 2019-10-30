import React from 'react'

import TERow, { TERowCustomProps } from '../TERow'
import TELabel, { TELabelCustomProps } from '../TELabel'
import TEInput, { TEInputProps } from '../TEInput'

export interface TEInputRowProps
	extends TERowCustomProps,
		TELabelCustomProps,
		TEInputProps {
	labelForKey: string
}

const TEInputRow: React.FC<TEInputRowProps> = (props) => {
	const {
		rowSize,
		last,
		className = '',
		title,
		type,
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
			className={`TEInputRow ${className}`}>
			<TELabel
				htmlFor={labelForKey}
				required={required}
				disabled={disabled}
				className="TEInputRowTitle">
				{title}
			</TELabel>
			<TEInput
				type={type}
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

export default TEInputRow
