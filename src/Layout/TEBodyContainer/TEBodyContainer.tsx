import React from 'react'

import { BodyContainer } from './styledComponents'

export interface TEBodyContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	sidebarWidth?: number
}
/**
 *
 * `TEBodyContainer` is really just a sized meant to play well with `TESideNavbar`. Below is the exact code used in this site.
 *
 * ```
 *	<TEBodyContainer>
 *		<TETitleBar title={barTitle} />
 *		{children}
 *	</TEBodyContainer>
 * ```
 *
 */
export const TEBodyContainer: React.FC<TEBodyContainerProps> = (props) => {
	const { className = '', ...rest } = props
	return <BodyContainer className={`TEBodyContainer ${className}`} {...rest} />
}

//TODO: Not in love with this. It might be a good idea to find a better way while also introducing some default responsiveness
TEBodyContainer.defaultProps = {
	sidebarWidth: 200,
}
