import React from 'react'
import { PowerSelect, PowerSelectMultiple } from 'react-power-select'
// import 'react-power-select/dist/react-power-select.css'

//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

//TODO: Return to this.
export const TESearchSelectInput: React.FC<any> = (props) => {
	const {
		type = 'single',
		searchEnabled = true,
		value,
		className = '',
		...rest
	} = props

	if (type === 'single') {
		return (
			<PowerSelect
				selected={value}
				className={`TESearchSelectInput ${className}`}
				searchEnabled={searchEnabled}
				{...rest}
			/>
		)
	}
	if (type === 'multi') {
		return (
			<PowerSelectMultiple
				selected={value}
				className={`TESearchSelectInput ${className}`}
				searchEnabled={searchEnabled}
				{...rest}
			/>
		)
	}

	return (
		<PowerSelect
			selected={value}
			className={`TESearchSelectInput ${className}`}
			{...rest}
		/>
	)
}
