import React from 'react'
import PhoneInput from 'react-phone-number-input'

import { TERow, TERowCustomProps } from '../TERow'
import { TELabel, TELabelCustomProps } from '../TELabel'
import { TEPhoneNumberInput, TEPhoneNumberInputProps } from '../TEPhoneNumberInput'

export interface TEPhoneNumberRowProps
	extends TERowCustomProps,
		TELabelCustomProps,
		TEPhoneNumberInputProps {
	labelForKey: string
}
/**
 *
 * A component containing a `TERow`, a `TELabel` and either a `TEPhoneNumberInput`.
 *
 * In addition to the props below, reference all props for `TEPhoneNumberInput`.
 *
 */
export const TEPhoneNumberRow = React.forwardRef<PhoneInput, TEPhoneNumberRowProps>(
	(props, ref) => {
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
	},
)
