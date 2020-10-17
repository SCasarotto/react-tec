import React from 'react'
import { render } from '@testing-library/react'
import { TECheckboxInput } from './TECheckboxInput'

describe('TECheckboxInput', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TECheckboxInput />)
		expect(asFragment()).toMatchSnapshot()
	})
})
