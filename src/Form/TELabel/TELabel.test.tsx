import React from 'react'
import { render } from '@testing-library/react'
import { TELabel } from './TELabel'

describe('TELabel', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TELabel />)
		expect(asFragment()).toMatchSnapshot()
	})
})
