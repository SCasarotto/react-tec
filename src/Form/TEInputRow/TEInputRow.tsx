import React from 'react'

import { TERow, TERowCustomProps } from '../TERow'
import { TELabel, TELabelCustomProps } from '../TELabel'
import { TEInput, TEInputProps } from '../TEInput'

export interface TEInputRowProps extends TERowCustomProps, TELabelCustomProps, TEInputProps {
	labelForKey: string
}

export const TEInputRow = React.forwardRef<HTMLInputElement, TEInputRowProps>((props, ref) => {
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
			<TEInput
				id={labelForKey}
				disabled={disabled}
				className='TEInputRowInput'
				ref={ref}
				{...rest}
			/>
		</TERow>
	)
})
