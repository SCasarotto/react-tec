import React, { useState, useRef, useCallback, useEffect, ReactNode } from 'react'
import { Reference, Popper, PopperProps, PopperChildrenProps } from 'react-popper'

import { TEButton } from './../TEButton'

export interface TEMenuButtonChildrenProps extends PopperChildrenProps {
	hideMenu(): void
}
//TODO: Improve Types
export interface TEMenuButtonProps extends Omit<PopperProps<any>, 'children'> {
	className?: string
	title: ReactNode
	children(props: TEMenuButtonChildrenProps): ReactNode
}
export const TEMenuButton: React.FC<TEMenuButtonProps> = (props) => {
	const { placement, className = '', title, children, ...rest } = props
	const [menuVisible, setMenuVisible] = useState(false)
	const containerRef = useRef(null)
	const hideMenu = useCallback(() => setMenuVisible(false), [])
	const handleOutsideClick = useCallback((e) => {
		// @ts-ignore: Object is possibly 'null'.
		if (containerRef && containerRef.current && containerRef.current.contains(e.target)) {
			return
		}
		setMenuVisible(false)
		return
	}, [])
	useEffect(() => {
		if ('ontouchend' in window) {
			document.addEventListener('touchend', handleOutsideClick)
		} else {
			document.addEventListener('click', handleOutsideClick)
		}
		return () => {
			document.removeEventListener('touchend', handleOutsideClick)
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [handleOutsideClick])

	return (
		<div className={`TEMenuButton ${className}`} ref={containerRef}>
			<Reference>
				{({ ref }) => (
					<TEButton
						className='TEMenuButtonButton'
						ref={ref}
						onClick={() => setMenuVisible(!menuVisible)}
					>
						{title}
					</TEButton>
				)}
			</Reference>
			<Popper placement={placement} {...rest}>
				{(popperData) =>
					menuVisible ? (
						<div
							className='TEMenuButtonMenu'
							ref={popperData.ref}
							style={popperData.style}
							data-placement={popperData.placement}
						>
							{children({ ...popperData, hideMenu })}
						</div>
					) : null
				}
			</Popper>
		</div>
	)
}
