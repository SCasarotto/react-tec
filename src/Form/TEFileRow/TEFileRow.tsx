import React from 'react'

import { TERow, TERowCustomProps } from '../TERow'
import { TELabel, TELabelCustomProps } from '../TELabel'
import { TEFileInput, TEFileInputProps } from '../TEFileInput'

export interface TEFileRowProps extends TERowCustomProps, TELabelCustomProps, TEFileInputProps {
	labelForKey: string
}
/**
 *
 * A form row with title and `TEFileRow`. In additiona to the props below, reference all props for `TEFileRow`.
 *
 */
export const TEFileRow = React.forwardRef<HTMLInputElement, TEFileRowProps>((props, ref) => {
	const { rowSize, last, className = '', title, labelForKey, ...rest } = props

	return (
		<TERow rowSize={rowSize} last={last} className={`TEFileRow ${className}`}>
			{title && (
				<TELabel
					htmlFor={labelForKey}
					required={rest.required}
					disabled={rest.disabled}
					className='TEFileRowTitle'
				>
					{title}
				</TELabel>
			)}
			<TEFileInput id={labelForKey} className='TEFileRowInput' ref={ref} {...rest} />
		</TERow>
	)
})
