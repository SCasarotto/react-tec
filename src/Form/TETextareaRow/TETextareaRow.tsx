import React from 'react'

import { TERow, TERowCustomProps } from '../TERow'
import { TELabel, TELabelCustomProps } from '../TELabel'
import { TETextarea, TETextareaProps } from '../TETextarea'

export interface TETextareaRowProps extends TERowCustomProps, TELabelCustomProps, TETextareaProps {
	labelForKey: string
}
/**
 *
 * A component containing a `TERow`, a `TELabel` and either a `TETextarea`. In addition to the props below, reference all props for `TETextarea`.
 *
 */
export const TETextareaRow = React.forwardRef<HTMLTextAreaElement, TETextareaRowProps>(
	(props, ref) => {
		const {
			rowSize,
			last,
			className = '',
			title,
			onChange,
			disabled,
			value,
			required,
			labelForKey,
			...rest
		} = props

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
				<TETextarea
					value={value}
					onChange={onChange}
					id={labelForKey}
					disabled={disabled}
					className='TEInputRowInput'
					ref={ref}
					{...rest}
				/>
			</TERow>
		)
	},
)
