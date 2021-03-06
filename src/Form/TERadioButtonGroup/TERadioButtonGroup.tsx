import React from 'react'

import { TELabel, TELabelCustomProps } from '../TELabel'

import { Container, InputWrapper, RowWrapper, RadioButton, Label } from './styledComponents'
import { TERowCustomProps, TERowProps } from '../TERow'
import { TERadioButtonInputProps } from '../TERadioButtonInput'
import { manipulateRowData } from './../../helpers'

export interface TERadioButtonData {
	label: string
	value?: string
	key?: string
}
export interface TERadioButtonGroupProps
	extends TERowCustomProps,
		TELabelCustomProps,
		TERadioButtonInputProps {
	labelForKey: string
	inputRowSize?: TERowProps['rowSize']
	checkedValue: string
	buttonArray: (string | TERadioButtonData)[]
	scrolling?: boolean
}
/**
 *
 * A component containing a `TERow`, a `TELabel`, and a group of `TERadioInput` cooresponding `TELabel`.
 *
 */
export const TERadioButtonGroup: React.FC<TERadioButtonGroupProps> = (props) => {
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
		<Container rowSize={rowSize} last={last} className={`TERadioButtonGroup ${className}`}>
			{title && (
				<TELabel
					disabled={disabled}
					required={required}
					className='TERadioButtonGroupTitle'
				>
					{title}
				</TELabel>
			)}
			<InputWrapper className='TERadioButtonGroupInputWrapper'>
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
								className='TERadioButtonGroupRowWrapper'
							>
								<RadioButton
									value={value}
									onChange={onChange}
									id={key}
									checked={checkedValue === value}
									disabled={disabled}
									className='TERadioButtonGroupRadioButton'
								/>
								<Label
									htmlFor={key}
									disabled={disabled}
									className='TERadioButtonGroupLabel'
								>
									{label}
								</Label>
							</RowWrapper>
						)
					})}
			</InputWrapper>
		</Container>
	)
}
