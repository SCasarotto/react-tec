import styled from 'styled-components'

export const Container = styled.div`
	${(props) => {
		const { theme, sidebarWidth } = props
		return `
			position: fixed;
			top: 0px;
			bottom: 0px;
			left: 0px;
			max-height: 100vh;
			height: 100%;
			width: ${sidebarWidth}px;
			display: flex;
			flex-direction: column;
			z-index: 20;
			background-color: ${theme.white};
			overflow-y: auto;
			box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 0px, rgba(0, 0, 0, 0.05) 1px 0px 5px 0px;
		`
	}}
`
export const Logo = styled.img`
	${(props) => {
		return `
			object-fit: contain;
			width: 100%;
			padding: 30px 60px;
		`
	}}
`
export const NavContainer = styled.div`
	${(props) => {
		return `
			height: 100%;
		`
	}}
`
export const MainUl = styled.ul`
	${(props) => {
		return `
			margin: 0px;
			padding: 0px;
		`
	}}
`
