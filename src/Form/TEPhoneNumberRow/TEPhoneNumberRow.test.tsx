import React from 'react'
import { render, waitFor } from '@testing-library/react'
import PhoneNumberInput from 'react-phone-number-input'

import { TEPhoneNumberRow } from './TEPhoneNumberRow'

describe('TEPhoneNumberRow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEPhoneNumberRow labelForKey='testTEPhoneNumberRow' onChange={() => {}} value='' />,
		)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEPhoneNumberRow
				labelForKey='testTEPhoneNumberRow'
				onChange={() => {}}
				value=''
				className='myClassName'
			/>,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})
	// Ref
	it('renders with ref', async () => {
		const ref: { current: PhoneNumberInput | null } = { current: null }
		render(
			<TEPhoneNumberRow
				labelForKey='testTEPhoneNumberRow'
				onChange={() => {}}
				value=''
				ref={ref}
			/>,
		)
		waitFor(() => expect(ref.current).toBeTruthy())
	})
})
