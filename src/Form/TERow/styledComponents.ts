import styled from 'styled-components'

export const Row = styled.div<{
	rowSize?: string
	last?: boolean
}>`
	position: relative;
	display: inline-block;
	vertical-align: top;
	margin-bottom: 10px;
	text-align: left;
	box-sizing: border-box;
	padding-right: ${(props) => (props.rowSize !== 'full' && !props.last ? '5px' : '0px')};

	${(props) => {
		const { rowSize } = props

		switch (rowSize) {
			case 'full':
				return 'width: 100%;'
			case 'two-third':
				return 'width: 66.66%'
			case 'half':
				return 'width: 50%'
			case 'third':
				return 'width: 33.33%;'
			case 'forth':
				return 'width: 25%;'
			case 'condensed':
				return 'width: auto;'
			default:
				return 'width: 100%;'
		}
	}}
`
