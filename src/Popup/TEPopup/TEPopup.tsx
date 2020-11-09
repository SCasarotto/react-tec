import React, { ReactNode } from 'react'

import { Background, Content } from './styledComponents'

export interface TEPopupProps {
	visible: boolean
	className?: string
	children?: ReactNode
}
/**
 *
 * TEPopup simple popup component.
 *
 */
export const TEPopup: React.FC<TEPopupProps> = (props) => {
	const { visible, className = '', children } = props

	return (
		<Background className={`TEPopup ${className}`} visible={visible}>
			<Content className='TEPopupContent'>{children}</Content>
		</Background>
	)
}

TEPopup.defaultProps = {
	visible: false,
}
