import styled from 'styled-components'

import { FaFileUpload, FaRegWindowClose } from 'react-icons/fa'

import TEButton from './../TEButton'

export const Wrapper = styled.div`
	${(props) => {
		return `
            display: flex;
            flex-direction: column;
            width: 100%;
        `
	}}
`
export const InputWrapper = styled.div`
	${(props) => {
		const { theme, disabled, active } = props
		let styles = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background-color: ${theme.white};
            border-radius: 5px;
            padding-right: 5px;

            transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
        `

		if (disabled) {
			styles += `
                border: 1px solid ${theme.lighterGray};
                box-shadow: none;
            `
		} else if (active) {
			styles += `
                border: 1px solid ${theme.primary};
                box-shadow: 0 0 0 1px ${theme.primary} inset;
            `
		} else {
			styles += `
                border: 1px solid ${theme.lightGray};
                box-shadow: none;

                :hover {
                    border: 1px solid ${theme.primary};
                    box-shadow: 0 0 0 1px ${theme.primary} inset;
                }
                :active {
                    border: 1px solid ${theme.primary};
                    box-shadow: 0 0 0 1px ${theme.primary} inset;
                }
            `
		}

		return styles
	}}
`
export const Label = styled.label`
	${(props) => {
		const { theme, disabled, active } = props
		let cursor = 'pointer'
		if (disabled) {
			cursor = 'not-allowed'
		} else if (active) {
			cursor = 'copy'
		}

		return `
            display: block;
            width: 100%;
            font-size: 14px;
            color: ${disabled ? theme.gray : theme.darkGray};
            padding: 10px;
            cursor: ${cursor};
        `
	}}
`

export const LabelCopy = styled.span`
	${(props) => {
		return `

        `
	}}
`

export const LabelIcon = styled(FaFileUpload)`
	${(props) => {
		return `
            margin-right: 10px;
            vertical-align: middle;
            font-size: 18px;
        `
	}}
`

export const Input = styled.input`
	${(props) => {
		return `
            display: none;
        `
	}}
`

export const ClearButton = styled(TEButton)`
	${(props) => {
		return `
            width: auto;
            padding: 5px 10px;
            text-align: center;
        `
	}}
`

export const ButtonIcon = styled(FaRegWindowClose)`
	${(props) => {
		return `
            color: inherit;
            display: block;
        `
	}}
`

export const ErrorMessage = styled.span`
	${(props) => {
		const { theme } = props
		return `
            display: block;
            padding-top: 5px;
            padding-bottom: 5px;
            font-size: 14px;
            color: ${theme.errorRed};
        `
	}}
`
