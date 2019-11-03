import React from 'react'

import { TERow, TERowCustomProps } from '../TERow'
import { TELabel, TELabelCustomProps } from '../TELabel'
import { TEFileInput, TEFileInputProps } from '../TEFileInput'

export interface TEFileRowProps
	extends TERowCustomProps,
		TELabelCustomProps,
		TEFileInputProps {
	labelForKey: string
}
export const TEFileRow: React.FC<TEFileRowProps> = (props) => {
	const { rowSize, last, className = '', title, labelForKey, ...rest } = props

	return (
		<TERow
			rowSize={rowSize}
			last={last}
			className={`TEFileRow ${className}`}>
			<TELabel
				htmlFor={labelForKey}
				required={rest.required}
				disabled={rest.disabled}
				className="TEFileRowTitle">
				{title}
			</TELabel>
			<TEFileInput
				id={labelForKey}
				className="TEFileRowInput"
				{...rest}
			/>
		</TERow>
	)
}
