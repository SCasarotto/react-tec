import styled from 'styled-components'

import { TERow } from '../TERow'
import { TELabel } from '../TELabel'
import { TERadioButtonInput } from '../TERadioButtonInput'

export const Container = styled(TERow)`
	margin-bottom: 10px;
	display: inline-block;
	vertical-align: top;
`
export const InputWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

export const RowWrapper = styled(TERow)`
	margin-bottom: 5px;
	display: flex;
	align-items: center;
`

export const RadioButton = styled(TERadioButtonInput)`
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
	cursor: pointer;
	font-size: 14px;

	@media (max-width: 550px) {
		font-size: 12px;
	}
`
