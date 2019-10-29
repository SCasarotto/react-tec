import React, { ChangeEvent } from 'react'

import { TERowCustomProps } from '../TERow'
import TELabel, { TELabelCustomProps } from '../TELabel'
import { TECheckboxInputProps } from '../TECheckboxInput'

import {
	Container,
	InputWrapper,
	RowWrarpper,
	Checkbox,
	Label,
} from './styledComponents'

interface TECheckboxGroupButtonData {
	label: string
	value?: string
	key?: string
}
interface ManipulateRowData {
	rowData: string | TECheckboxGroupButtonData
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

interface TECheckboxGroupProps
	extends TERowCustomProps,
		TELabelCustomProps,
		Omit<TECheckboxInputProps, 'onChange'> {
	labelForKey: string
	onChange(values: string[], event: ChangeEvent<HTMLInputElement>): void
	inputRowSize?: string
	checkedValues: string[]
	buttonArray: (string | TECheckboxGroupButtonData)[]
	scrolling?: boolean
}
const TECheckboxGroup: React.FC<TECheckboxGroupProps> = (props) => {
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { checkedValues, onChange } = props
		const { value } = event.target

		let newValues = [...checkedValues]
		if (checkedValues) {
			if (checkedValues.includes(value)) {
				newValues = newValues.filter((e) => e !== value)
			} else {
				newValues.push(value)
			}
		}
		if (onChange) {
			onChange(newValues, event)
		}
	}

	const {
		rowSize,
		last,
		className = '',
		title,
		required,
		inputRowSize,
		disabled,
		checkedValues,
		buttonArray,
		labelForKey,
	} = props

	return (
		<Container
			rowSize={rowSize}
			last={last}
			className={`TECheckboxGroup ${className}`}>
			<TELabel
				disabled={disabled}
				required={required}
				className="TECheckboxGroupTitle">
				{title}
			</TELabel>
			<InputWrapper className="TECheckboxGroupInputWrapper">
				{buttonArray &&
					buttonArray.map((rowData) => {
						const { label, value, key } = manipulateRowData({
							rowData,
							labelForKey,
						})

						return (
							<RowWrarpper
								key={key}
								rowSize={inputRowSize}
								className="TECheckboxGroupRowWrapper">
								<Checkbox
									value={value}
									onChange={handleInputChange}
									id={key}
									checked={
										checkedValues &&
										checkedValues.includes(value)
									}
									disabled={disabled}
									className="TECheckboxGroupCheckbox"
								/>
								<Label
									htmlFor={key}
									disabled={disabled}
									className="TECheckboxGroupLabel">
									{label}
								</Label>
							</RowWrarpper>
						)
					})}
			</InputWrapper>
		</Container>
	)
}

TECheckboxGroup.defaultProps = {
	scrolling: false,
}

export default TECheckboxGroup
