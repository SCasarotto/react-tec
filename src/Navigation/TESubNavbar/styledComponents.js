import styled from 'styled-components'

import TENavLink from './../TENavLink'

export const Container = styled.div`
	${(props) => {
		const { theme } = props
		return `
			position: relative;
			width: 100%;
			background-color: ${theme.white};
			padding-left: 30px;
			box-shadow: ${theme.shadowBottom};
			z-index: 5;

			@media (max-width: 800px) {
				padding-left: 25px;
			}
			@media (max-width: 650px) {
				padding-left: 20px;
			}
			@media (max-width: 450px) {
				padding-left: 15px;
			}
		`
	}}
`
export const Content = styled.div`
	${(props) => {
		const { theme } = props
		return `
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			height: 70px;
			border-top: 1px solid ${theme.lightGray};
			padding-right: 30px;

			@media (max-width: 800px) {
				height: 65px;
				padding-right: 25px;
			}
			@media (max-width: 650px) {
				height: 60px;
				padding-right: 20px;
			}
			@media (max-width: 450px) {
				height: 55px;
				padding-right: 15px;
			}
		`
	}}
`
export const Ul = styled.ul`
	${(props) => {
		return `
			margin: 0px;
			padding: 0px;
			display: flex;
			justify-content: flex-start;
			align-items: flex-end;
			overflow-x: auto;
		`
	}}
`
export const Li = styled.li`
	${(props) => {
		return `
			list-style: none;
			width: 100px;
			flex-shrink: 0;
		`
	}}
`
export const Link = styled(TENavLink)`
	${(props) => {
		const { theme } = props
		return `
			display: block;
			text-align: center;
			width: 100%;
			line-height: 40px;
			border-bottom: 4px solid transparent;
			font-size: 16px;
			white-space: nowrap;
			text-decoration: none;
			color: ${theme.darkerGray};

			transition: border 0.2s ease-in, color 0.2s ease-in;

			:active {
				color: ${theme.primary};
				border-color: ${theme.primary};
			}
			:hover {
				color: ${theme.primary};
				border-color: ${theme.primary};
			}
			&.active{
				color: ${theme.primary};
				border-color: ${theme.primary};
			}
		`
	}}
`
