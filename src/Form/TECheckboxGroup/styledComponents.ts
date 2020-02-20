import styled from 'styled-components'

import { TERow } from '../TERow'
import { TELabel } from '../TELabel'
import { TECheckboxInput } from '../TECheckboxInput'

export const Container = styled(TERow)`
	margin-bottom: 10px;
	display: inline-block;
	vertical-align: top;
`
export const InputWrapper = styled.div<{ scrolling?: boolean }>`
	display: flex;
	flex-wrap: wrap;
	height: ${(props) => (props.scrolling ? '300px' : 'auto')};
	overflow-y: ${(props) => (props.scrolling ? 'scroll' : 'visible')};
	background-color: ${(props) => (props.scrolling ? props.theme.white : 'transparent')};
	border: ${(props) => (props.scrolling ? `1px solid ${props.theme.lightGray}` : 'none')};
	padding: ${(props) => (props.scrolling ? '5px' : '0px')};
`

export const RowWrarpper = styled(TERow)`
	margin-bottom: 5px;
	display: flex;
	align-items: center;
`

export const Checkbox = styled(TECheckboxInput)`
	display: inline-block;
	vertical-align: middle;
	cursor: pointer;
`
export const Label = styled(TELabel)`
	width: auto;
	display: inline-block;
	vertical-align: middle;
	padding-left: 10px;
	margin-bottom: 0px;
	font-size: 14px;
	color: ${(props) => (props.disabled ? props.theme.gray : props.theme.darkerGray)};

	@media (max-width: 550px) {
		fontsize: 12px;
	}
`
