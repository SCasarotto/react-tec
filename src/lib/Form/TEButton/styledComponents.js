import styled from 'styled-components'

export const Button = styled.button`
	${(props) => {
		const { disabled, theme } = props

		return `
			position: relative;
			display: block;
			width: 100%;
			font-size: 18px;
			padding: 5px 20px;
			text-align: center;
			cursor: ${disabled ? 'not-allowed' : 'pointer'};
			border-radius: 5px;
            box-sizing: border-box;

			color: ${disabled ? theme.gray : theme.darkerGray};
			border: 1px solid ${disabled ? theme.lighterGray : theme.lightGray};

			transition: color 0.2s ease-in, background-color 0.2s ease-in, border 0.2s ease-in;
			:hover {
				color: ${theme.white};
				background-color: ${theme.primary};
				border: 1px solid ${theme.primary};
			}
			:active {
				color: ${theme.white};
				background-color: ${theme.primary};
				border: 1px solid ${theme.primary};
			}
		`
	}}
`
