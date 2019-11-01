import styled from 'styled-components'

export const Textarea = styled.textarea`
	position: relative;
	display: block;
	width: 100%;
	font-size: 14px;
	box-sizing: border-box;
	padding: 10px;
	background-color: ${(props) => props.theme.white};
	min-height: 140px;
	border-radius: 5px;
	line-height: 1.5;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};

	color: ${(props) => (props.disabled ? props.theme.gray : props.theme.darkerGray)};
	border: 1px solid
		${(props) => (props.disabled ? props.theme.lighterGray : props.theme.lightGray)};

	transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
	:hover,
	:active {
		border: 1px solid
			${(props) => (props.disabled ? props.theme.lighterGray : props.theme.primary)};
		box-shadow: 0 0 0 1px
			${(props) => (props.disabled ? props.theme.lighterGray : props.theme.primary)} inset;
	}
`