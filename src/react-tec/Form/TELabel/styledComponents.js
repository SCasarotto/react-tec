import styled from 'styled-components'

export const Label = styled.label`
    ${(props) => {
        const { disabled, htmlFor, theme } = props

        let cursor = 'default'
        if (htmlFor) {
            cursor = 'pointer'
        }
        if (disabled) {
            cursor = 'not-allowed'
        }

        return `
            position: relative;
            display: block;
            width: auto;
            box-sizing: border-box;
            margin-bottom: 3px;
            font-weight: 100;
            letter-spacing: 0.5px;
            font-size: 18px;
            color: ${disabled ? theme.gray : theme.darkerGray};
            cursor: ${cursor};

            @media (max-width: 550px) {
                font-size: 16px;
            }
        `
    }}
`
