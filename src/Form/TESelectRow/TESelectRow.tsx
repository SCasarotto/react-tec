import React, { ReactElement } from 'react'
import Select, { Props as SelectProps, OptionTypeBase } from 'react-select'

import { TERow, TERowCustomProps } from './../TERow'
import { TELabel, TELabelCustomProps } from './../TELabel'
import { TESelect } from './../TESelect'

// export interface TESelectRowProps<T>
// 	extends TERowCustomProps,
// 		TELabelCustomProps,
// 		TESelectProps<T> {
// 	labelForKey: string
// 	title?: string
// }

export interface TESelectRowProps<T extends OptionTypeBase>
	extends TERowCustomProps,
		TELabelCustomProps,
		SelectProps<T> {}

const UnwarppedSearchSelectRow = <T extends OptionTypeBase>(
	props: TESelectRowProps<T>,
	ref: React.Ref<Select<T>>,
) => {
	const { rowSize, last, className = '', title, disabled, required, labelForKey, ...rest } = props

	return (
		<TERow rowSize={rowSize} last={last} className={`TEInputRow ${className}`}>
			{title && (
				<TELabel
					htmlFor={labelForKey}
					required={required}
					disabled={disabled}
					className='TEInputRowTitle'
				>
					{title}
				</TELabel>
			)}
			<TESelect<T> disabled={disabled} ref={ref} {...rest} />
		</TERow>
	)
}

// This is here because of the need to useForward Ref with a generic prop type
// See: https://stackoverflow.com/a/58473012
export const TESelectRow = React.forwardRef(UnwarppedSearchSelectRow) as <T extends OptionTypeBase>(
	props: TESelectRowProps<T> & { ref?: React.Ref<Select<T>> },
) => ReactElement
