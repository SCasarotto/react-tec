import styled from 'styled-components'

export const Container = styled.div`
	background-color: ${(props) => props.theme.lightestGray};
	border-radius: 5px;
	padding: 10px;
`
export const Title = styled.h4`
	color: ${(props) => props.theme.primary};
	margin-bottom: 5px;
	font-size: 18px;
`
export const ColumnWrapper = styled.div`
	display: flex;
`
export const CodeColumn = styled.div`
	flex: 1;
	padding-right: 10px;
	width: 50%;
`
export const ComponentColumn = styled.div`
	flex: 1;
	padding-left: 10px;
	width: 50%;
`
