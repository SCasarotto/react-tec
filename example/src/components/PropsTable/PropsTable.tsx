import React from 'react'

import { Table, Tr, Th, Td } from './styledComponents'

interface PropRow {
	prop: string
	type: string
	note?: string
}
interface Props {
	propArray: PropRow[]
}
export const PropsTable: React.FC<Props> = (props) => {
	const { propArray } = props
	return (
		<Table>
			<thead>
				<Tr>
					<Th>Prop</Th>
					<Th>Type</Th>
					<Th>Note</Th>
				</Tr>
			</thead>
			<tbody>
				{propArray &&
					propArray.map((propRow, index) => {
						const { prop, type, note } = propRow
						return (
							<Tr key={index}>
								<Td>{prop}</Td>
								<Td>{type}</Td>
								<Td>{note}</Td>
							</Tr>
						)
					})}
			</tbody>
		</Table>
	)
}
