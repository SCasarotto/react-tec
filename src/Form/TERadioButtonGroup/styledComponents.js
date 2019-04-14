import styled from 'styled-components'

import TERow from './../TERow'
import TELabel from './../TELabel'
import TERadioButtonInput from './../TERadioButtonInput'

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
		return `
            display: flex;
            flex-wrap: wrap;
        `
	}}
`

export const RowWrapper = styled(TERow)`
	${(props) => {
		return `
            margin-bottom: 5px;
            display: flex;
            align-items: center;
        `
	}}
`

export const RadioButton = styled(TERadioButtonInput)`
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
		const { theme } = props

		return `
            width: auto;
            display: inline-block;
            vertical-align: middle;
            padding-left: 10px;
            margin-bottom: 0px;
            cursor: pointer;
            font-size: 14px;

            @media (max-width: 550px) {
                font-size: 12px;
            }
        `
	}}
`
