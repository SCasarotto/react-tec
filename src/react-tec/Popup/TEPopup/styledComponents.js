import styled from 'styled-components'

export const Background = styled.div`
	${(props) => {
		const { visible } = props
		return `
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: rgba(0,0,0,0.5);
			z-index: 1000;
			overflow-y: auto;
			transition: visibility 0.25s ease-in-out, opacity 0.25s ease-in-out;
			opacity: ${visible ? 1 : 0};
			visibility: ${visible ? 'visible' : 'hidden'};
		`
	}}
`
export const Content = styled.div`
	${(props) => {
		const { theme } = props
		return `
			position: relative;
			background-color: ${theme.white};
			border-radius: 20px;
			margin: 50px auto;
			max-width: 650px;		`
	}}
`
