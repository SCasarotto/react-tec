import styled from 'styled-components'

export const Container = styled.div<{ size?: string }>`
	position: relative;
	background-color: ${(props) => props.theme.white};
	border-radius: 5px;
	box-shadow: ${(props) => props.theme.shadowCenter};

	padding: 30px;
	margin-bottom: 30px;

	@media (max-width: 800px) {
		padding: 25px;
		margin-bottom: 25px;
	}
	@media (max-width: 650px) {
		padding: 20px;
		margin-bottom: 20px;
	}
	@media (max-width: 450px) {
		padding: 15px;
		margin-bottom: 15px;
		border-radius: 3px;
	}
	${(props) => {
		const { size } = props

		switch (size) {
			case 'full':
				return `width: 100%;`
			case 'three-quarter':
				return `
                    width: calc(75% - 20px);
                    @media (max-width: 700px) {
                        width: 100%;
                    }
                `
			case 'two-third':
				return `
                    width: calc(66.666% - 20px);
                    @media (max-width: 700px) {
                        width: 100%;
                    }
                `
			case 'half':
				return `
                    width: calc(50% - 15px);
                    @media (max-width: 700px) {
                        width: 100%;
                    }
                `
			case 'third':
				return `
                    width: calc(33.333% - 10px);
                    @media (max-width: 700px) {
                        width: 100%;
                    }
                `
			case 'quarter':
				return `
                    width: calc(25% - 10px);
                    @media (max-width: 700px) {
                        width: 100%;
                    }
                `
			case 'condensed':
				return `
                    width: auto;
                    @media (max-width: 700px) {
                        width: 100%;
                    }
                `
			default:
				return `width: 100%;`
		}
	}}
`
