import React from 'react'
import { render, waitFor } from '@testing-library/react'
import DatePicker from 'react-datepicker'
import { TEDatetimeRow } from './TEDatetimeRow'

describe('TEDatetimeRow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEDatetimeRow labelForKey='myDatetimeRow' onChange={() => {}} />,
		)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEDatetimeRow
				className='myClassName'
				labelForKey='myDatetimeRow'
				onChange={() => {}}
			/>,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: DatePicker | null } = { current: null }
		render(<TEDatetimeRow labelForKey='myDatetimeRow' onChange={() => {}} ref={ref} />)
		waitFor(() => expect(ref.current).toBeTruthy())
	})
})
