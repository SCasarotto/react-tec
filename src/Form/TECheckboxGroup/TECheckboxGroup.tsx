import React, { ChangeEvent } from 'react'

import { TERowCustomProps, TERowProps } from '../TERow'
import { TELabel, TELabelCustomProps } from '../TELabel'
import { TECheckboxInputProps } from '../TECheckboxInput'
import { manipulateRowData } from './../../helpers'

import { Container, InputWrapper, RowWrarpper, Checkbox, Label } from './styledComponents'

export interface TECheckboxGroupButtonData {
	label: string
	value?: string
	key?: string
}

export interface TECheckboxGroupProps
	extends TERowCustomProps,
		TELabelCustomProps,
		Omit<TECheckboxInputProps, 'onChange'> {
	labelForKey: string
	onChange(values: string[], event: ChangeEvent<HTMLInputElement>): void
	inputRowSize?: TERowProps['rowSize']
	checkedValues: string[]
	buttonArray: (string | TECheckboxGroupButtonData)[]
	scrolling?: boolean
}
export const TECheckboxGroup: React.FC<TECheckboxGroupProps> = (props) => {
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
		<Container rowSize={rowSize} last={last} className={`TECheckboxGroup ${className}`}>
			{title && (
				<TELabel disabled={disabled} required={required} className='TECheckboxGroupTitle'>
					{title}
				</TELabel>
			)}
			<InputWrapper className='TECheckboxGroupInputWrapper'>
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
								className='TECheckboxGroupRowWrapper'
							>
								<Checkbox
									value={value}
									onChange={handleInputChange}
									id={key}
									checked={checkedValues && checkedValues.includes(value)}
									disabled={disabled}
									className='TECheckboxGroupCheckbox'
								/>
								<Label
									htmlFor={key}
									disabled={disabled}
									className='TECheckboxGroupLabel'
								>
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
