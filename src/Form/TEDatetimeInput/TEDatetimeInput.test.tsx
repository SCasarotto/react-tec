import React from 'react'
import { render } from '@testing-library/react'
import { TEDatetimeInput } from './TEDatetimeInput'

describe('TEDatetimeInput', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEDatetimeInput onChange={() => {}} />)
		expect(asFragment()).toMatchSnapshot()
	})
})
