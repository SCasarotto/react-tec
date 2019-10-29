import styled from 'styled-components'

export const Label = styled.label<{ disabled?: boolean }>`
	position: relative;
	display: block;
	width: auto;
	box-sizing: border-box;
	margin-bottom: 3px;
	font-size: 18px;
	color: ${props =>
		props.disabled ? props.theme.gray : props.theme.darkerGray};

	@media (max-width: 550px) {
		font-size: 16px;
	}
	${props => {
		const { disabled, htmlFor } = props

		if (disabled) {
			return 'cursor: not-allowed;'
		}
		if (htmlFor) {
			return 'cursor: pointer;'
		}
		return 'cursor: default;'
	}}
`
