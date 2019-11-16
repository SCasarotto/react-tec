import styled from 'styled-components'

export const Container = styled.div<{ sidebarWidth: number }>`
	position: fixed;
	top: 0px;
	bottom: 0px;
	left: 0px;
	max-height: 100vh;
	height: 100%;
	width: ${(props) => props.sidebarWidth}px;
	display: flex;
	flex-direction: column;
	z-index: 20;
	background-color: ${(props) => props.theme.white};
	overflow-y: auto;
	/*TODO: Investigate if this should be repleaced by one of the theme shadows*/
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 0px, rgba(0, 0, 0, 0.05) 1px 0px 5px 0px;
`
export const Logo = styled.img`
	object-fit: contain;
	width: 100%;
	padding: 30px 60px;
`
export const NavContainer = styled.div`
	height: 100%;
`
export const MainUl = styled.ul`
	margin: 0px;
	padding: 0px;
`
