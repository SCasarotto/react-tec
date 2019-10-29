import styled from 'styled-components'

export const Row = styled.div`
	position: relative;
	display: inline-block;
	vertical-align: top;
	margin-bottom: 10px;
	text-align: left;
	box-sizing: border-box;
	padding-left: ${(props) => (props.size !== 'full' && props.last ? '5px' : '0px')};
	padding-right: ${(props) => (props.size !== 'full' && !props.last ? '5px' : '0px')};

	${(props) => {
		const { size } = props

		switch (size) {
			case 'full':
				return 'width: 100%;'
			case 'two-third':
				return 'width: 66.66%;'
			case 'half':
				return 'width: 50%;'
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
