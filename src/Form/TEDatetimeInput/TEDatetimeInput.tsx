import React from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

import { WithPortalButtonWrapper, WithPortalButton, WithPortalIcon } from './styledComponents'

export interface TEDatetimeInputProps extends Omit<ReactDatePickerProps, 'value'> {
	//These are used to standardize to other input props
	placeholder?: string
	value?: Date | null
	ref?: ((instance: DatePicker | null) => void) | React.RefObject<DatePicker> | null | undefined
	withPortalButton?: boolean
}
export const TEDatetimeInput: React.FC<TEDatetimeInputProps> = React.forwardRef((props, ref) => {
	const {
		selected,
		value,
		placeholderText,
		placeholder,
		className = '',
		withPortalButton,
		...rest
	} = props

	if (withPortalButton) {
		return (
			<WithPortalButtonWrapper>
				<DatePicker
					selected={selected || value}
					placeholderText={placeholderText || placeholder}
					className={`TEDatetimeInput ${className}`}
					ref={ref}
					{...rest}
				/>
				<DatePicker
					selected={selected || value}
					withPortal
					customInput={
						<WithPortalButton className='TEDatetimeInputWithPortalButton'>
							<WithPortalIcon className='TEDatetimeInputWithPortalButtonIcon' />
						</WithPortalButton>
					}
					{...rest}
					id={rest.id ? rest.id + 'withPortalButton' : rest.id}
				/>
			</WithPortalButtonWrapper>
		)
	}

	return (
		<>
			<DatePicker
				selected={selected || value}
				placeholderText={placeholderText || placeholder}
				className={`TEDatetimeInput ${className}`}
				ref={ref}
				{...rest}
			/>
		</>
	)
})

TEDatetimeInput.defaultProps = {
	autoComplete: 'off',
	// dateFormat: 'MM/DD/YYYY',
}
