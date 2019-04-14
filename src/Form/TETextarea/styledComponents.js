import styled from 'styled-components'

export const Textarea = styled.textarea`
	${(props) => {
		const { disabled, theme } = props

		return `
            position: relative;
            display: block;
            width: 100%;
            font-size: 14px;
            box-sizing: border-box;
            padding: 10px;
            background-color: ${theme.white};
            min-height: 140px;
            border-radius: 5px;
            line-height: 1.5;
            cursor: ${disabled ? 'not-allowed' : 'text'};

            color: ${disabled ? theme.gray : theme.darkerGray};
            border: 1px solid ${disabled ? theme.lighterGray : theme.lightGray};

            transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
            :hover {
                border: 1px solid ${disabled ? theme.lighterGray : theme.primary};
                box-shadow: 0 0 0 1px ${disabled ? theme.lighterGray : theme.primary} inset;
           }
            :active {
                border: 1px solid ${disabled ? theme.lighterGray : theme.primary};
                box-shadow: 0 0 0 1px ${disabled ? theme.lighterGray : theme.primary} inset;
            }
        `
	}}
`
