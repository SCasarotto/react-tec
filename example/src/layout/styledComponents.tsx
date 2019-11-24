import styled from 'styled-components'
import { TESideNavbar, TEBodyContainer, TEButton } from 'react-tec'
import { Link } from 'react-router-dom'

import { NavIcon } from './../assets/images/SVGs/NavIcon'

export const SideNavbar = styled(TESideNavbar)<{ sideNavActive?: boolean }>`
	position: fixed;
	top: 0px;
	bottom: 0px;
	max-height: 100vh;
	height: 100%;
	display: flex;
	flex-direction: column;
	z-index: 20;
	background-color: ${(props) => props.theme.white};
	overflow-y: auto;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 0px, rgba(0, 0, 0, 0.05) 1px 0px 5px 0px;

	left: ${(props) => (props.sideNavActive ? '0px' : '-200px')};
	width: 200px;
	transition: left 0.25s ease-in-out, width 0.25s ease-in-out;

	@media (max-width: 1000px) {
		left: ${(props) => (props.sideNavActive ? '0px' : '-180px')};
		width: 180px;
	}
	@media (max-width: 800px) {
		left: ${(props) => (props.sideNavActive ? '0px' : '-160px')};
		width: 160px;
	}
	@media (max-width: 650px) {
		left: ${(props) => (props.sideNavActive ? '0px' : '-140px')};
		width: 140px;
	}

	@media print {
		display: none;
	}

	.TESideNavLinkLink {
		@media (max-width: 800px) {
			passing: 12px 16px;
		}
		@media (max-width: 650px) {
			passing: 8px 12px;
		}
	}
	.TESideNavLinkTitle {
		@media (max-width: 800px) {
			font-size: 16px;
		}
		@media (max-width: 650px) {
			font-size: 14px;
		}
	}
`
export const LogoWrapper = styled.div`
	height: 130px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;

	@media (max-width: 800px) {
		height: 115px;
	}
	@media (max-width: 650px) {
		height: 105px;
	}
`
export const LogoLink = styled(Link)`
	text-decoration: none;
`
export const Logo = styled.img`
	object-fit: contain;
	width: 120px;
`
export const BodyContainer = styled(TEBodyContainer)<{ sideNavActive?: boolean }>`
	display: flex;
	flex-direction: column;
	width: ${(props) => (props.sideNavActive ? 'calc(100% - 200px)' : '100%')};
	margin-left: ${(props) => (props.sideNavActive ? '200px' : '0px')};
	transition: width 0.25s ease-in-out, margin-left 0.25s ease-in-out;

	@media (max-width: 1000px) {
		width: ${(props) => (props.sideNavActive ? 'calc(100% - 180px)' : '100%')};
		margin-left: ${(props) => (props.sideNavActive ? '180px' : '0px')};
	}
	@media (max-width: 800px) {
		width: ${(props) => (props.sideNavActive ? 'calc(100% - 160px)' : '100%')};
		margin-left: ${(props) => (props.sideNavActive ? '160px' : '0px')};
	}
	@media (max-width: 650px) {
		width: ${(props) => (props.sideNavActive ? 'calc(100% - 140px)' : '100%')};
		margin-left: ${(props) => (props.sideNavActive ? '140px' : '0px')};
	}

	@media print {
		width: 100%;
		margin-left: 0px;
		background-color: #ffffff;
	}
`
export const Content = styled.div`
	flex-grow: 1;
`

export const LeftWrapper = styled.div`
	display: flex;
	align-items: center;
`
export const SlideNavButton = styled(TEButton)`
	width: 35px;
	height: 30px;
	padding: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 3px;
	margin-right: 10px;
	background-color: transparent;

	@media (max-width: 650px) {
		width: 32px;
		height: 28px;
	}
`
export const SlideNavIcon = styled(NavIcon)`
	width: 100%;
	height: auto;
	fill: currentColor;
`
export const Title = styled.h1`
	font-size: 28px;
	margin-top: 0px;
	margin-bottom: 0px;
	color: ${(props) => props.theme.primary};

	@media (max-width: 1000px) {
		font-size: 26px;
	}
	@media (max-width: 800px) {
		font-size: 24px;
	}
	@media (max-width: 650px) {
		font-size: 20px;
	}
`
