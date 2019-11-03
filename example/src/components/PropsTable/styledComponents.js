import styled from 'styled-components'

export const Table = styled.table`
	${(props) => {
		return `
			width: 100%;
			margin-bottom: 30px;
		    border-collapse: collapse;
		    border-spacing: 0;
		`
	}}
}
`
export const Tr = styled.tr``
export const Th = styled.th`
	${(props) => {
		const { theme } = props
		return `
			text-align: left;
			border: 1px solid ${theme.lightGray};
			font-weight: 600;
			padding: 6px 13px;
		`
	}}
`
export const Td = styled.td`
	${(props) => {
		const { theme } = props
		return `
			text-align: left;
			border: 1px solid ${theme.lightGray};
			padding: 6px 13px;
			font-size: 14px;
		`
	}}
`
