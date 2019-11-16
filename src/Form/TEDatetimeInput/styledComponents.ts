import styled from 'styled-components'
import { TEButton } from '../TEButton'

export const Button = styled(TEButton)`
	position: relative;
	display: block;
	width: 100%;
	font-size: 14px;
	padding: 10px;
	box-sizing: border-box;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	border-radius: 5px;
	background-color: ${(props) => props.theme.white};
	color: ${(props) => (props.disabled ? props.theme.gray : props.theme.darkerGray)};
	text-align: left;

	border: 1px solid
		${(props) => (props.disabled ? props.theme.lighterGray : props.theme.lightGray)};
	transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;

	:hover,
	:active {
		border: 1px solid ${(props) => props.theme.primary};
		box-shadow: 0 0 0 1px ${(props) => props.theme.primary} inset;
		background-color: ${(props) => props.theme.white};
		color: ${(props) => (props.disabled ? props.theme.gray : props.theme.darkerGray)};
	}
`
