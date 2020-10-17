import React from 'react'

import { Row, Label, SegmentedContainer, LabelWrapper, Input, InputLabel } from './styledComponents'
import { TERowCustomProps } from '../TERow'
import { TELabelCustomProps } from '../TELabel'
import { TERadioButtonInputProps } from '../TERadioButtonInput'
import { manipulateRowData } from './../../helpers'

export interface TESegmentedGroupButtonData {
	label: string
	value?: string
	key?: string
}
export interface TESegmentedGroupProps
	extends TERowCustomProps,
		TELabelCustomProps,
		TERadioButtonInputProps {
	checkedValue: string
	buttonArray: (string | TESegmentedGroupButtonData)[]
	inline?: boolean
	labelForKey: string
}
export const TESegmentedGroup: React.FC<TESegmentedGroupProps> = (props) => {
	const {
		title,
		onChange,
		checkedValue,
		buttonArray,
		labelForKey,
		required,
		inline,
		disabled,
		rowSize,
		last,
		className = '',
	} = props

	return (
		<Row
			rowSize={rowSize}
			last={last}
			inline={inline}
			className={`TESegmentedGroup ${className}`}
		>
			{title && (
				<Label
					inline={inline}
					required={required}
					disabled={disabled}
					className='TESegmentedGroupTitle'
				>
					{title}
				</Label>
			)}
			<SegmentedContainer inline={inline} className='TESegmentedGroupSegmentedContainer'>
				{buttonArray &&
					buttonArray.map((rowData, index) => {
						const { label, value, key } = manipulateRowData({
							rowData,
							labelForKey,
						})

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
