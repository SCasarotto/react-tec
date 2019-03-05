import styled from 'styled-components'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TERadioButtonInput from './../TERadioButtonInput'

export const Row = styled(TERow)`
    ${(props) => {
        const { inline } = props

        if (inline) {
            return `
                display: flex;
                justify-content: space-between;
            `
        } else {
            return ``
        }
    }}
`
export const Label = styled(TELabel)`
    ${(props) => {
        const { inline } = props

        return `
            width: ${inline ? 'auto' : '100%'};
            align-self: ${inline ? 'center' : 'auto'};
            text-align: left;
            display: block;
            margin-bottom: ${inline ? '0px' : '5px'};
            padding-right: ${inline ? '10px' : '0px'};
            font-size: 18px;

            @media (max-width: 550px) {
                font-size: 16px;
            }
        `
    }}
`
export const SegmentedContainer = styled.div`
    ${(props) => {
        const { inline } = props

        if (inline) {
            return `
                display: inline-block;
                width: auto;
                white-space: nowrap;
                align-self: center;
            `
        } else {
            return ``
        }
    }}
`
export const LabelWrapper = styled.div`
    ${(props) => {
        return `
            display: inline-block;
            width: auto;
        `
    }}
`
export const Input = styled(TERadioButtonInput)`
    ${(props) => {
        return `
            display: none;
        `
    }}
`
export const InputLabel = styled(TELabel)`
    ${(props) => {
        const { first, last, checked, disabled, theme } = props
        let styles = `
            display: inline-block;
            width: auto;
            border: 1px solid ${checked ? theme.primary : theme.lightGray};
            padding: 10px 15px;
            margin: 0px;
            background-color: ${checked ? theme.primary : theme.white};
            font-size: 14px;
            color: ${checked ? theme.white : theme.darkGray}
            font-weight: 300;
            cursor: ${disabled ? 'not-allowed' : 'pointer'};
            pointer-events: ${disabled ? 'none' : 'auto'};

            transition: color 0.2s ease-in, background-color 0.2s ease-in, border 0.2s ease-in;

            :hover {
                color: ${disabled && !checked ? theme.gray : theme.white};
                background-color: ${disabled && !checked ? theme.white : theme.primary};
                border: 1px solid ${disabled && !checked ? theme.lightGray : theme.primary};
            }
            :active {
                color: ${disabled && !checked ? theme.gray : theme.white};
                background-color: ${disabled && !checked ? theme.white : theme.primary};
                border: 1px solid ${disabled && !checked ? theme.lightGray : theme.primary};
            }
        `

        if (first) {
            styles += `
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            `
        }
        if (last) {
            styles += `
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            `
        }

        return styles
    }}
`
