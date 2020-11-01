import React from 'react'

import { Container } from './styledComponents'

export interface TEPanelWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}
/**
 *
 * TEPanelWrapper simple layout component meant to be used as the parent of `TEPanel`. Below is the code that wraps this page.
 *
 * ```
 * <TEPanelWrapper>
 *		{ ... }
 * </TEPanelWrapper>
 * ```
 *
 */
export const TEPanelWrapper: React.FC<TEPanelWrapperProps> = (props) => {
	const { className = '', ...rest } = props
	return <Container className={`TEPanelWrapper ${className}`} {...rest} />
}
