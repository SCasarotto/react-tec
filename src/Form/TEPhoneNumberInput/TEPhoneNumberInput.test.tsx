import React from 'react'
import { render } from '@testing-library/react'
import { TEPhoneNumberInput } from './TEPhoneNumberInput'

describe('TEPhoneNumberInput', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPhoneNumberInput onChange={() => {}} value='' />)
		expect(asFragment()).toMatchSnapshot()
	})
})
