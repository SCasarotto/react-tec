import React from 'react'

import TELabel, { TELabelCustomProps } from '../TELabel'

import {
	Container,
	InputWrapper,
	RowWrapper,
	RadioButton,
	Label,
} from './styledComponents'
import { TERowCustomProps } from 'Form/TERow'
import { TERadioButtonInputProps } from 'Form/TERadioButtonInput'

interface TERadioButtonData {
	label: string
	value?: string
	key?: string
}
interface ManipulateRowData {
	rowData: string | TERadioButtonData
	labelForKey: string
}
const manipulateRowData = ({
	rowData,
	labelForKey = '',
}: ManipulateRowData) => {
	//Allowing For Greater Shorthand
	if (typeof rowData === 'string') {
		const label = rowData
		const value = rowData
		const key = labelForKey + rowData
		return { label, value, key }
	} else if (typeof rowData === 'object') {
		let { label, value, key } = rowData

		if (!value) {
			value = label
		}
		if (!key) {
			key = labelForKey + label
		}

		return { label, value, key }
	}
	return rowData
}
interface TERadioButtonGroupProps
	extends TERowCustomProps,
		TELabelCustomProps,
		TERadioButtonInputProps {
	labelForKey: string
	inputRowSize?: string
	checkedValue: string
	buttonArray: (string | TERadioButtonData)[]
	scrolling?: boolean
}
const TERadioButtonGroup: React.FC<TERadioButtonGroupProps> = (props) => {
	const {
		rowSize,
		last,
		title,
		onChange,
		checkedValue,
		buttonArray,
		labelForKey,
		disabled,
		required,
		inputRowSize,
		className = '',
	} = props

	return (
		<Container
			rowSize={rowSize}
			last={last}
			className={`TERadioButtonGroup ${className}`}>
			<TELabel
				disabled={disabled}
				required={required}
				className="TERadioButtonGroupTitle">
				{title}
			</TELabel>
			<InputWrapper className="TERadioButtonGroupInputWrapper">
				{buttonArray &&
					buttonArray.map((rowData) => {
						const { label, value, key } = manipulateRowData({
							rowData,
							labelForKey,
						})

						return (
							<RowWrapper
								key={key}
								rowSize={inputRowSize}
								className="TERadioButtonGroupRowWrapper">
								<RadioButton
									value={value}
									onChange={onChange}
									id={key}
									checked={checkedValue === value}
									disabled={disabled}
									className="TERadioButtonGroupRadioButton"
								/>
								<Label
									htmlFor={key}
									disabled={disabled}
									className="TERadioButtonGroupLabel">
									{label}
								</Label>
							</RowWrapper>
						)
					})}
			</InputWrapper>
		</Container>
	)
}

export default TERadioButtonGroup
