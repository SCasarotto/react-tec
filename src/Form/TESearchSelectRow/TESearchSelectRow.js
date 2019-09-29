import React from 'react'
import PropTypes from 'prop-types'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TESearchSelectInput from './../TESearchSelectInput'

// import 'react-power-select/dist/react-power-select.css'
//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

const TESearchSelectRow = (props) => {
	const { size, last, className = '', title, labelForKey, ...rest } = props

	return (
		<TERow
			size={size}
			last={last}
			className={`TESearchSelectRow ${className}`}
			required={rest.required}
		>
			<TELabel
				htmlFor={labelForKey}
				required={rest.required}
				disabled={rest.disabled}
				className='TESearchSelectRowTitle'
			>
				{title}
			</TELabel>
			<TESearchSelectInput id={labelForKey} className='TESearchSelectRowInput' {...rest} />
		</TERow>
	)
}

TESearchSelectRow.propTypes = {
	size: PropTypes.string,
	last: PropTypes.bool,
	title: PropTypes.string,
	type: PropTypes.string,
	labelForKey: PropTypes.string,
}

export default TESearchSelectRow
