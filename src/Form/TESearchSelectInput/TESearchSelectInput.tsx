import React from 'react'
import { PowerSelect, PowerSelectMultiple } from 'react-power-select'
// import 'react-power-select/dist/react-power-select.css'

//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

//TODO: Return to this.
export const TESearchSelectInput = React.forwardRef<any, any>((props, ref) => {
	const { type = 'single', searchEnabled = true, value, className = '', ...rest } = props

	if (type === 'single') {
		return (
			<PowerSelect
				selected={value}
				className={`TESearchSelectInput ${className}`}
				searchEnabled={searchEnabled}
				ref={ref}
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
				ref={ref}
				{...rest}
			/>
		)
	}

	return <PowerSelect selected={value} className={`TESearchSelectInput ${className}`} {...rest} />
})
