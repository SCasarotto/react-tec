import React from 'react'
import { render } from '@testing-library/react'
import { TEPhoneNumberInput } from './TEPhoneNumberInput'

describe('TEPhoneNumberInput', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPhoneNumberInput onChange={() => {}} value='' />)
		expect(asFragment()).toMatchSnapshot()
	})
})
