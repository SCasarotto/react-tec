import styled from 'styled-components'

export const Row = styled.div`
    ${(props) => {
        const { size, last } = props

        let width = '100%'
        switch (size) {
            case 'full':
                width = '100%'
                break
            case 'two-third':
                width = '66.66%'
                break
            case 'half':
                width = '50%'
                break
            case 'third':
                width = '33.33%'
                break
            case 'forth':
                width = '25%'
                break
            case 'condensed':
                width = 'auto'
                break
            default:
                break
        }

        return `
            position: relative;
            display: inline-block;
            vertical-align: top;
            margin-bottom: 10px;
            text-align: left;
            box-sizing: border-box;
            width: ${width};
            padding-left: ${size !== 'full' && last ? '5px' : '0px'};
            padding-right: ${size !== 'full' && !last ? '5px' : '0px'};
        `
    }}
`
