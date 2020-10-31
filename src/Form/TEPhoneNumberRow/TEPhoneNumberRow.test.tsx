import React from 'react'
import { render } from '@testing-library/react'
import { TEPhoneNumberRow } from './TEPhoneNumberRow'

describe('TEPhoneNumberRow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEPhoneNumberRow labelForKey='testTEPhoneNumberRow' onChange={() => {}} value='' />,
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
