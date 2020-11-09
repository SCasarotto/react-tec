import React from 'react'
import { PowerSelect, PowerSelectMultiple } from 'react-power-select'
// import 'react-power-select/dist/react-power-select.css'

//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

//TODO: Return to this.
/**
 *
 * TESearchSelectInput is simply a styled [React Power Select](https://github.com/selvagsz/react-power-select) Component. A few props have been adjusted or defaulted.
 *
 * Note: Styling for this component is not handled the same way as most React TEC components. In order to style everything the React Power Select css has been internallized in the React TEC global styles. In the future this may be adjusted to make styling easier and more consistent with other components.
 *
 */
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
