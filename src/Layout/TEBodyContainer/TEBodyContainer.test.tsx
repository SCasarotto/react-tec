import React from 'react'
import { render } from '@testing-library/react'
import { TEBodyContainer } from './TEBodyContainer'

describe('TEBodyContainer', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEBodyContainer />)
		expect(asFragment()).toMatchSnapshot()
	})
})
