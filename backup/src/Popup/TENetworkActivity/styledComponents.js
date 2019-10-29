import styled from 'styled-components'

import TEPopup from './../TEPopup'
import TESpinner from './../../Layout/TESpinner'

export const Popup = styled(TEPopup)`
	display: flex;
	justify-content: center;
	align-items: center;

	.TEPopupContent {
		background-color: rgba(0, 0, 0, 0.5);
		padding: 60px;
		text-align: center;
	}
`
export const Spinner = styled(TESpinner)`
	margin-bottom: 30px;
`
export const Message = styled.p`
	position: relative;
	width: 100%;
	text-align: center;
	font-size: 24px;
	margin: 0px;
	color: ${(props) => props.theme.white};
`
