import styled from 'styled-components'

export const Table = styled.table`
	width: 100%;
	margin-bottom: 30px;
	border-collapse: collapse;
	border-spacing: 0;
`
export const Tr = styled.tr``
export const Th = styled.th`
	text-align: left;
	border: 1px solid ${(props) => props.theme.lightGray};
	font-weight: 600;
	padding: 6px 13px;
`
export const Td = styled.td`
	text-align: left;
	border: 1px solid ${(props) => props.theme.lightGray};
	padding: 6px 13px;
	font-size: 14px;
`
