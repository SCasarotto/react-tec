import React from 'react'
import { render } from '@testing-library/react'
import { TESearchSelectRow } from './TESearchSelectRow'

describe('TESearchSelectRow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TESearchSelectRow labelForKey='testTESearchSelectRow' onChange={() => {}} />,
		)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TESearchSelectRow
				labelForKey='testTESearchSelectRow'
				onChange={() => {}}
				className='myClassName'
			/>,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
