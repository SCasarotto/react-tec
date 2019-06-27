import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'

import { Button } from './styledComponents'

const determineValue = (value) => {
	if (!value) {
		//Without this a value of '' was causing an error...
		return null
	}
	if (typeof value === 'string' || typeof value === 'number') {
		return new Date(value)
	}
	return value
}
const TEDatetimeInput = (props) => {
	const { value, placeholder, withTEPortal, ...rest } = props
	const [showPortal, setShowPortal] = useState(false)

	if (withTEPortal) {
		const { dateFormat, onChange } = rest
		return (
			<Fragment>
				<Button onClick={() => setShowPortal(!showPortal)}>
					{format(determineValue(value), dateFormat)}
				</Button>
				{showPortal && (
					<DatePicker
						selected={determineValue(value)}
						placeholderText={placeholder}
						withPortal
						inline
						{...rest}
						onChange={(date) => {
							onChange(date)
							setShowPortal(false)
						}}
					/>
				)}
			</Fragment>
		)
	}

	return <DatePicker selected={determineValue(value)} placeholderText={placeholder} {...rest} />
}

TEDatetimeInput.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
	placeholder: PropTypes.string,
	autoComplete: PropTypes.string,
}

TEDatetimeInput.defaultProps = {
	autoComplete: 'off',
	dateFormat: 'MM/DD/YYYY',
}

export default TEDatetimeInput
