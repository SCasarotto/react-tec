import styled from 'styled-components'

export const Button = styled.button`
	position: relative;
	display: block;
	width: 100%;
	font-size: 18px;
	padding: 5px 20px;
	text-align: center;
	cursor: pointer;
	border-radius: 5px;
	box-sizing: border-box;

	color: ${(props) => props.theme.darkerGray};
	background-color: ${(props) => props.theme.white};
	border: 1px solid ${(props) => props.theme.lightGray};

	transition: color 0.2s ease-in, background-color 0.2s ease-in, border 0.2s ease-in;
	:hover,
	:active {
		color: ${(props) => props.theme.white};
		background-color: ${(props) => props.theme.primary};
		border: 1px solid ${(props) => props.theme.primary};
	}
	:disabled {
		cursor: not-allowed;
		color: ${(props) => props.theme.gray};
		border: 1px solid ${(props) => props.theme.lighterGray};
	}
`
