import styled from 'styled-components'

export const Input = styled.input`
	${(props) => {
		const { disabled, theme } = props

		return `
            position: relative;
            display: block;
            width: 100%;
            font-size: 14px;
            padding: 10px;
            box-sizing: border-box;
            cursor: ${disabled ? 'not-allowed' : 'text'};
            border-radius: 5px;
            background-color: ${theme.white};
            color: ${disabled ? theme.gray : theme.darkerGray};

            border: 1px solid ${disabled ? theme.lighterGray : theme.lightGray};
            transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
            :hover {
                border: 1px solid ${theme.primary};
                box-shadow: 0 0 0 1px ${theme.primary} inset;
            }
            :active {
                border: 1px solid ${theme.primary};
                box-shadow: 0 0 0 1px ${theme.primary} inset;
            }
        `
	}}
`
