import styled from 'styled-components'

import TEPanelWrapper from './../TEPanelWrapper'
import TEPanel from './../TEPanel'
import TEButton from './../../Form/TEButton'

export const PanelWrapper = styled(TEPanelWrapper)`
	${(props) => {
		return `
			justify-content: center;
		`
	}}
`
export const Panel = styled(TEPanel)`
	${(props) => {
		return `
			max-width: 600px;
			margin: 30px auto;
		`
	}}
`
export const Title = styled.h1`
	${(props) => {
		return `
			margin-top: 0px;
			margin-bottom: 20px;
			text-align: center;
			font-size: 26px;
		`
	}}
`
export const Message = styled.p`
	${(props) => {
		return `
			margin-top: 0px;
			margin-bottom: 20px;
			text-align: center;
			font-size: 16px;
		`
	}}
`
export const Button = styled(TEButton)`
	${(props) => {
		return `
			margin: 10px auto;
			width: auto;
		`
	}}
`
