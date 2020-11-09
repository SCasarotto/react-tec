import React from 'react'

import { TEPanelTitle, TEPanelTitleProps } from '../TEPanelTitle'

import { Container } from './styledComponents'

export type PanelSize =
	| 'full'
	| 'three-quarter'
	| 'two-third'
	| 'half'
	| 'third'
	| 'quarter'
	| 'condensed'
export interface TEPanelProps extends TEPanelTitleProps {
	size?: PanelSize
}
/**
 *
 * `TEPanel` simple containing element containing a `TEPanelTitle`. Is expected to be used as a child of `TEPanelWrapper`. In addition to the props below, view `TEPanelTitle` for additional props.
 *
 */
export const TEPanel: React.FC<TEPanelProps> = (props) => {
	const {
		size = 'full',
		className = '',
		title,
		leftComponent,
		subtitle,
		rightComponent,
		children,
	} = props
	return (
		<Container className={`TEPanel ${className}`} size={size}>
			{(title || leftComponent || subtitle || rightComponent) && (
				<TEPanelTitle
					title={title}
					leftComponent={leftComponent}
					subtitle={subtitle}
					rightComponent={rightComponent}
					className='TEPanelTitleBar'
				/>
			)}
			{children}
		</Container>
	)
}
