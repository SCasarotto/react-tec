import styled from 'styled-components'

export const Input = styled.input`
	cursor: pointer;
	box-sizing: border-box;
	margin: 0px; /* Resets Safari Margin */

	:disabled {
		cursor: not-allowed;
	}
`
