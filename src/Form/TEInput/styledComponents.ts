import styled from 'styled-components'

export const Input = styled.input`
	position: relative;
	display: block;
	width: 100%;
	font-size: 14px;
	padding: 10px;
	box-sizing: border-box;
	border-radius: 5px;
	background-color: ${(props) => props.theme.white};
	color: ${(props) => props.theme.darkerGray};

	border: 1px solid ${(props) => props.theme.lightGray};
	transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;

	:hover,
	:active {
		border: 1px solid ${(props) => props.theme.primary};
		box-shadow: 0 0 0 1px ${(props) => props.theme.primary} inset;
	}
	:disabled {
		color: ${(props) => props.theme.gray};
		border: 1px solid ${(props) => props.theme.lighterGray};
		box-shadow: none;
		cursor: not-allowed;
	}
`
