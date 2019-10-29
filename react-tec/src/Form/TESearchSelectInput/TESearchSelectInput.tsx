import React from 'react'
import PropTypes from 'prop-types'
import { PowerSelect, PowerSelectMultiple } from 'react-power-select'
// import 'react-power-select/dist/react-power-select.css'

//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

const TESearchSelectInput = (props) => {
	const { type = 'single', searchEnabled = true, value, className = '', ...rest } = props

	if (type === 'single') {
		return (
			<PowerSelect
				selected={value}
				className={`TESearchSelectInput ${className}`}
				{...rest}
			/>
		)
	}
	if (type === 'multi') {
		return (
			<PowerSelectMultiple
				selected={value}
				className={`TESearchSelectInput ${className}`}
				{...rest}
			/>
		)
	}

	return <PowerSelect selected={value} className={`TESearchSelectInput ${className}`} {...rest} />
}

TESearchSelectInput.propTypes = {
	type: PropTypes.string,
}

export default TESearchSelectInput
