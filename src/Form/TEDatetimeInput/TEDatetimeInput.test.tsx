import React from 'react'
import { render, waitFor } from '@testing-library/react'
import DatePicker from 'react-datepicker'
import { TEDatetimeInput } from './TEDatetimeInput'

describe('TEDatetimeInput', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEDatetimeInput onChange={() => {}} />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEDatetimeInput className='myClassName' onChange={() => {}} />,
		)
		expect(container.querySelector('.myClassName')).toBeTruthy()
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: DatePicker | null } = { current: null }
		render(<TEDatetimeInput onChange={() => {}} ref={ref} />)
		waitFor(() => expect(ref.current).toBeTruthy())
	})
})
