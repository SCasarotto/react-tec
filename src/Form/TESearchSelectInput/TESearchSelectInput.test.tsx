import React from 'react'
import { render } from '@testing-library/react'
import { TESearchSelectInput } from './TESearchSelectInput'

describe('TESearchSelectInput', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TESearchSelectInput onChange={() => {}} />)
		expect(asFragment()).toMatchSnapshot()
	})
})
