import styled from 'styled-components'

export const Container = styled.div`
	${(props) => {
		const { theme } = props
		return `
			background-color: ${theme.lightestGray};
			border-radius: 5px;
			padding: 10px;
		`
	}}
`
export const Title = styled.h4`
	${(props) => {
		const { theme } = props
		return `
			color: ${theme.primary};
			margin-bottom: 5px;
			font-size: 18px;
		`
	}}
`
export const ColumnWrapper = styled.div`
	${(props) => {
		return `
			display: flex;

		`
	}}
`
export const CodeColumn = styled.div`
	${(props) => {
		return `
			flex: 1;
			padding-right: 10px;
			width: 50%;
		`
	}}
`
export const ComponentColumn = styled.div`
	${(props) => {
		return `
			flex: 1;
			padding-left: 10px;
			width: 50%;
		`
	}}
`
