import styled from 'styled-components'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TECheckboxInput from './../TECheckboxInput'

export const Container = styled(TERow)`
    ${(props) => {
        return `
            margin-bottom: 10px;
            display: inline-block;
            vertical-align: top;
        `
    }}
`
export const InputWrapper = styled.div`
    ${(props) => {
        const { scrolling, theme } = props
        return `
            display: flex;
            flex-wrap: wrap;
            ${
                scrolling
                    ? `
                    height: 300px;
                    overflow-y: scroll;
                    background-color: ${theme.white};
                    padding: 10px;
                    border: 1px solid ${theme.lightGray};
                    border-radius: 5;
                `
                    : ''
            }
        `
    }}
`

export const RowWrarpper = styled(TERow)`
    ${(props) => {
        return `
            margin-bottom: 5px;
            display: flex;
            align-items: center;
        `
    }}
`

export const Checkbox = styled(TECheckboxInput)`
    ${(props) => {
        return `
            display: inline-block;
            vertical-align: middle;
            cursor: pointer;
        `
    }}
`
export const Label = styled(TELabel)`
    ${(props) => {
        const { theme, disabled } = props

        return `
            width: auto;
            display: inline-block;
            vertical-align: middle;
            padding-left: 10px;
            margin-bottom: 0px;
            cursor: pointer;
            fontSize: 14px;
            color: ${disabled ? theme.gray : theme.darkerGray};

            @media (max-width: 550px) {
                fontSize: 12px;
            };
        `
    }}
`
