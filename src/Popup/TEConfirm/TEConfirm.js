//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Popup, Title, Message, ButtonContainer, LeftButton, RightButton } from './styledComponents'

const TEConfirm = (props) => {
	const {
		title,
		message,
		leftOnClick,
		leftButtonTitle,
		rightOnClick,
		rightButtonTitle,
		children,
		visible,
		className,
	} = props

	return (
		<Popup visible={visible} className={className}>
			<Title className='TEConfirmTitle'>{title}</Title>
			<Message className='TEConfirmMessage'>{message}</Message>
			{children}
			<ButtonContainer className='TEConfirmButtonoContainer'>
				<LeftButton onClick={leftOnClick} className='TEConfirmButton TEConfirmLeftButton'>
					{leftButtonTitle}
				</LeftButton>
				<RightButton
					onClick={rightOnClick}
					className='TEConfirmButton TEConfirmRightButton'
				>
					{rightButtonTitle}
				</RightButton>
			</ButtonContainer>
		</Popup>
	)
}

TEConfirm.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	leftOnClick: PropTypes.func.isRequired,
	leftButtonTitle: PropTypes.string,
	rightOnClick: PropTypes.func.isRequired,
	rightButtonTitle: PropTypes.string,
}

TEConfirm.defaultProps = {
	leftButtonTitle: 'Cancel',
	rightButtonTitle: 'Confirm',
}

export default TEConfirm
