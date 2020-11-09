import React from 'react'
import { render, waitFor } from '@testing-library/react'
import PhoneNumberInput from 'react-phone-number-input'

import { TEPhoneNumberInput } from './TEPhoneNumberInput'

describe('TEPhoneNumberInput', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPhoneNumberInput onChange={() => {}} value='' />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEPhoneNumberInput onChange={() => {}} value='' className='myClassName' />,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})
	// Ref
	it('renders with ref', async () => {
		const ref: { current: PhoneNumberInput | null } = { current: null }
		render(<TEPhoneNumberInput onChange={() => {}} value='' ref={ref} />)
		waitFor(() => expect(ref.current).toBeTruthy())
	})
})
