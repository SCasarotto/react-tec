import React from 'react'

import { TERow, TERowCustomProps } from '../TERow'
import { TELabel, TELabelCustomProps } from '../TELabel'
import { TEPhoneNumberInput, TEPhoneNumberInputProps } from '../TEPhoneNumberInput'

export interface TEPhoneNumberRowProps
	extends TERowCustomProps,
		TELabelCustomProps,
		TEPhoneNumberInputProps {
	labelForKey: string
}

export const TEPhoneNumberRow: React.FC<TEPhoneNumberRowProps> = React.forwardRef((props, ref) => {
	const {
		rowSize,
		last,
		className = '',
		title,
		type,
		disabled,
		required,
		labelForKey,
		...rest
	} = props

	return (
		<TERow rowSize={rowSize} last={last} className={`TEPhoneNumberRow ${className}`}>
			{title && (
				<TELabel
					htmlFor={labelForKey}
					required={required}
					disabled={disabled}
					className='TEPhoneNumberRowTitle'
				>
					{title}
				</TELabel>
			)}
			<TEPhoneNumberInput
				type={type}
				id={labelForKey}
				disabled={disabled}
				className='TEPhoneNumberRowInput'
				ref={ref}
				{...rest}
			/>
		</TERow>
	)
})
