import styled from 'styled-components'

export const Container = styled.div`
	${(props) => {
		const { theme, wrapperHeight } = props
		return `
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			align-items: flex-start;
			padding: 30px;
			background-color: ${theme.lighterGray};
			min-height: ${wrapperHeight ? `calc(100vh - ${wrapperHeight}px)` : '100%'};

			@media (max-width: 800px) {
				padding: 25px;
			}
			@media (max-width: 650px) {
				padding: 20px;
			}
			@media (max-width: 450px) {
				padding: 15px;
			}
		`
	}}
`
