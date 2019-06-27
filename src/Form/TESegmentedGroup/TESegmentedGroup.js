import React from 'react'
import PropTypes from 'prop-types'

import { Row, Label, SegmentedContainer, LabelWrapper, Input, InputLabel } from './styledComponents'

const manipulateRowData = ({ rowData, labelForKey = '' }) => {
	//Allowing For Greater Shorthand
	if (typeof rowData === 'string') {
		const label = rowData
		const value = rowData
		const key = labelForKey + rowData
		return { label, value, key }
	} else if (typeof rowData === 'object') {
		let { label, value: value = label, key: key = labelForKey + label } = rowData
		return { label, value, key }
	}
	return rowData
}
const TESegmentedGroup = (props) => {
	const {
		title,
		onChange,
		checkedValue,
		buttonArray,
		labelForKey,
		required,
		inline,
		disabled,
		size,
		last,
		className,
	} = props

	return (
		<Row size={size} last={last} inline={inline} className={className}>
			<Label
				inline={inline}
				required={required}
				disabled={disabled}
				className='TESegmentedGroupTitle'
			>
				{title}
			</Label>
			<SegmentedContainer inline={inline} className='TESegmentedGroupSegmentedContainer'>
				{buttonArray &&
					buttonArray.map((rowData, index) => {
						const { label, value, key } = manipulateRowData({ rowData, labelForKey })

						return (
							<LabelWrapper
								key={key}
								className='TESegmentedGroupSegmentedLabelWrapper'
							>
								<Input
									value={value}
									onChange={onChange}
									id={key}
									checked={checkedValue === value}
									disabled={disabled}
									className='TESegmentedGroupSegmentedInput'
								/>
								<InputLabel
									htmlFor={key}
									key={key}
									first={index === 0}
									last={index + 1 === buttonArray.length}
									checked={checkedValue === value}
									disabled={disabled}
									className='TESegmentedGroupSegmentedLabel'
								>
									{label}
								</InputLabel>
							</LabelWrapper>
						)
					})}
			</SegmentedContainer>
		</Row>
	)
}

TESegmentedGroup.propTypes = {
	title: PropTypes.string,
	size: PropTypes.string,
	last: PropTypes.bool,
	inline: PropTypes.bool,
	onChange: PropTypes.func,
}

export default TESegmentedGroup
