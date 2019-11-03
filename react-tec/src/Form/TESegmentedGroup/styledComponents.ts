import styled from 'styled-components'

import { TERow } from '../TERow'
import { TELabel } from '../TELabel'
import { TERadioButtonInput } from '../TERadioButtonInput'

export const Row = styled(TERow)<{ inline?: boolean }>`
	${(props) =>
		props.inline ? 'display: flex; justify-content: space-between;' : ''}
`
export const Label = styled(TELabel)<{ inline?: boolean }>`
	width: ${(props) => (props.inline ? 'auto' : '100%')};
	align-self: ${(props) => (props.inline ? 'center' : 'auto')};
	text-align: left;
	display: block;
	margin-bottom: ${(props) => (props.inline ? '0px' : '3px')};
	padding-right: ${(props) => (props.inline ? '10px' : '0px')};
	font-size: 18px;

	@media (max-width: 550px) {
		font-size: 16px;
	}
`
export const SegmentedContainer = styled.div<{ inline?: boolean }>`
	${(props) =>
		props.inline
			? `
                display: inline-block;
                width: auto;
                white-space: nowrap;
                align-self: center;
            `
			: ''}
`
export const LabelWrapper = styled.div`
	display: inline-block;
	width: auto;
`
export const Input = styled(TERadioButtonInput)`
	display: none;
`
export const InputLabel = styled(TELabel)<{
	checked: boolean
	first?: boolean
	last?: boolean
}>`
	display: inline-block;
	width: auto;
	border: 1px solid
		${(props) =>
			props.checked ? props.theme.primary : props.theme.lightGray};
	padding: 8px 15px;
	margin: 0px;
	background-color: ${(props) =>
		props.checked ? props.theme.primary : props.theme.white};
	font-size: 14px;
	color: ${(props) =>
		props.checked ? props.theme.white : props.theme.darkGray};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

	transition: color 0.2s ease-in, background-color 0.2s ease-in,
		border 0.2s ease-in;

	:hover,
	:active {
		color: ${(props) =>
			props.disabled && !props.checked
				? props.theme.gray
				: props.theme.white};
		background-color: ${(props) =>
			props.disabled && !props.checked
				? props.theme.white
				: props.theme.primary};
		border: 1px solid
			${(props) =>
				props.disabled && !props.checked
					? props.theme.lightGray
					: props.theme.primary};
	}
	${(props) => {
		const { first, last } = props

		if (last) {
			return `
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            `
		}
		if (first) {
			return `
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            `
		}

		return ''
	}}
`
