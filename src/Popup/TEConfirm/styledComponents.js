import styled from 'styled-components'

import TEPopup from './../TEPopup'
import TEButton from './../../Form/TEButton'

export const Popup = styled(TEPopup)`
	.TEPopupContent {
		width: 90%;
		max-width: 600px;
		margin: 100px auto;
	}
`
export const Title = styled.h4`
	position: relative;
	width: 100%;
	text-align: center;
	font-size: 24px;
	margin-bottom: 20px;
	color: ${(props) => props.theme.darkerGray};
	padding: 30px 30px 0px 30px;
`
export const Message = styled.p`
	position: relative;
	width: 100%;
	text-align: center;
	font-size: 18px;
	line-height: 1.25;
	margin-bottom: 30px;
	padding: 0px 40px;
	color: ${(props) => props.theme.darkerGray};
`
export const ButtonContainer = styled.div`
	overflow: hidden;
	display: flex;
`
export const LeftButton = styled(TEButton)`
	width: 50%;
	font-size: 18px;
	line-height: 2;
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 0px;
	border-top: 1px solid ${(props) => props.theme.primary};
	border-right: 1px solid ${(props) => props.theme.primary};
	border-bottom: none;
	border-left: none;

	:hover,
	:active {
		color: ${(props) => props.theme.white};
		background-color: ${(props) => props.theme.primary};
		border-top: 1px solid ${(props) => props.theme.primary};
		border-right: 1px solid ${(props) => props.theme.primary};
		border-bottom: none;
		border-left: none;
	}
`
export const RightButton = styled(TEButton)`
	width: 50%;
	font-size: 18px;
	line-height: 2;
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 20px;
	border-top: 1px solid ${(props) => props.theme.primary};
	border-right: none;
	border-bottom: none;
	border-left: 1px solid ${(props) => props.theme.primary};

	:hover,
	:active {
		color: ${(props) => props.theme.white};
		background-color: ${(props) => props.theme.primary};
		border-top: 1px solid ${(props) => props.theme.primary};
		border-right: none;
		border-bottom: none;
		border-left: 1px solid ${(props) => props.theme.primary};
	}
`
