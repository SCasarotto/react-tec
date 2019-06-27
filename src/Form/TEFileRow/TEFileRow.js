import React from 'react'
import PropTypes from 'prop-types'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TEFileInput from './../TEFileInput'

const TEFileRow = (props) => {
	const {
		//Row
		size,
		last,
		className,

		//Label
		title,

		//Both
		labelForKey,

		...rest
	} = props

	return (
		<TERow size={size} last={last} className={className}>
			<TELabel
				htmlFor={labelForKey}
				required={rest.required}
				disabled={rest.disabled}
				className='TEFileRowTitle'
			>
				{title}
			</TELabel>
			<TEFileInput id={labelForKey} className='TEFileRowInput' {...rest} />
		</TERow>
	)
}

TEFileRow.propTypes = {
	//Row
	size: PropTypes.string,
	last: PropTypes.bool,
	title: PropTypes.string,

	//Both
	labelForKey: PropTypes.string,
}

export default TEFileRow
