import React, { ReactElement } from 'react'
import Select, { Props as SelectProps, OptionTypeBase, GroupTypeBase } from 'react-select'

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

export interface TESelectRowProps<
	OptionType extends OptionTypeBase,
	IsMulti extends boolean = false,
	GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends TERowCustomProps, TELabelCustomProps, SelectProps<OptionType, IsMulti, GroupType> {}

const UnwarppedSearchSelectRow = <
	OptionType extends OptionTypeBase,
	IsMulti extends boolean = false,
	GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
	props: TESelectRowProps<OptionType, IsMulti, GroupType>,
	ref: React.Ref<Select<OptionType, IsMulti, GroupType>>,
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
			<TESelect<OptionType, IsMulti, GroupType> disabled={disabled} ref={ref} {...rest} />
		</TERow>
	)
}

// This is here because of the need to useForward Ref with a generic prop type
// See: https://stackoverflow.com/a/58473012
/**
 *
 * A form row with title and `TESelect`. In additiona to the props below, reference all props for `TESelect`.
 *
 */
export const TESelectRow = React.forwardRef(UnwarppedSearchSelectRow) as <
	OptionType extends OptionTypeBase,
	IsMulti extends boolean = false,
	GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
	props: TESelectRowProps<OptionType, IsMulti, GroupType> & {
		ref?: React.Ref<Select<OptionType, IsMulti, GroupType>>
	},
) => ReactElement
