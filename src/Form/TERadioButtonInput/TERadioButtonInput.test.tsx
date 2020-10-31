import React from 'react'
import { render } from '@testing-library/react'
import { TERadioButtonInput } from './TERadioButtonInput'

describe('TERadioButtonInput', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TERadioButtonInput />)
		expect(asFragment()).toMatchSnapshot()
	})
})
