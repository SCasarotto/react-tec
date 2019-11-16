import React /*Fragment, useState*/ from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
// import { format } from 'date-fns'

// import { Button } from './styledComponents'

//Couldn't figure out what this value is really used for ...
export interface TEDatetimeInputProps extends Omit<ReactDatePickerProps, 'value'> {
	//These are used to standardize to other input props
	placeholder?: string
	value?: Date | null
}
export const TEDatetimeInput: React.FC<TEDatetimeInputProps> = (props) => {
	const {
		selected,
		value,
		placeholderText,
		placeholder,
		className = '',
		/*withTEPortal,*/ ...rest
	} = props
	// const [showPortal, setShowPortal] = useState(false)

	// if (withTEPortal) {
	// 	const { dateFormat, onChange } = rest
	// 	return (
	// 		<Fragment>
	// 			<Button onClick={() => setShowPortal(!showPortal)}>
	// 				{format(determineValue(value), dateFormat)}
	// 			</Button>
	// 			{showPortal && (
	// 				<DatePicker
	// 					selected={determineValue(value)}
	// 					placeholderText={placeholder}
	// 					withPortal
	// 					inline
	// 					{...rest}
	// 					onChange={(date) => {
	// 						onChange(date)
	// 						setShowPortal(false)
	// 					}}
	// 				/>
	// 			)}
	// 		</Fragment>
	// 	)
	// }

	return (
		<DatePicker
			selected={selected || value}
			placeholderText={placeholderText || placeholder}
			className={`TEDatetimeInput ${className}`}
			{...rest}
		/>
	)
}

TEDatetimeInput.defaultProps = {
	autoComplete: 'off',
	// dateFormat: 'MM/DD/YYYY',
}
