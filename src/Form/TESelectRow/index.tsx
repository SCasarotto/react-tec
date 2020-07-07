import React from 'react'

import { TERow, TERowCustomProps } from './../TERow'
import { TELabel, TELabelCustomProps } from './../TELabel'
import { TESelect, TESelectProps } from './../TESelect'

export interface TESelectRowProps<T>
	extends TERowCustomProps,
		TELabelCustomProps,
		TESelectProps<T> {
	labelForKey: string
	title?: string
}

export const TESelectRow = <T,>(props: TESelectRowProps<T>) => {
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
			<TESelect<T> disabled={disabled} {...rest} />
		</TERow>
	)
}
