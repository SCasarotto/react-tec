import React from 'react'
import { render } from '@testing-library/react'
import { TESpinner } from './TESpinner'

describe('TESpinner', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TESpinner />)
		expect(asFragment()).toMatchSnapshot()
	})
})
