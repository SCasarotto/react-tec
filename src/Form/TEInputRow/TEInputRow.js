//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TEInput from './../TEInput'
import TETextarea from './../TETextarea'

const TEInputRow = (props) => {
	const {
		//Row
		size,
		last,
		className,

		//Label
		title,

		//Input
		type,
		onChange,
		disabled,
		value,

		//Both
		required,
		labelForKey,

		...rest
	} = props

	return (
		<TERow size={size} last={last} className={className}>
			<TELabel
				htmlFor={labelForKey}
				required={required}
				disabled={disabled}
				className='TEInputRowTitle'
			>
				{title}
			</TELabel>
			{type !== 'textarea' ? (
				<TEInput
					type={type}
					value={value}
					onChange={onChange}
					id={labelForKey}
					disabled={disabled}
					className='TEInputRowInput'
					{...rest}
				/>
			) : (
				<TETextarea
					value={value}
					onChange={onChange}
					id={labelForKey}
					disabled={disabled}
					className='TEInputRowInput'
					{...rest}
				/>
			)}
		</TERow>
	)
}

TEInputRow.propTypes = {
	//Row
	rowStyles: PropTypes.object,
	size: PropTypes.string,
	last: PropTypes.bool,

	//Input
	inputStyles: PropTypes.object,
	type: PropTypes.string,
	onChange: PropTypes.func,
	onChangeKey: PropTypes.string,
	disabled: PropTypes.bool,

	//Both
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	labelForKey: PropTypes.string,
}

export default TEInputRow
