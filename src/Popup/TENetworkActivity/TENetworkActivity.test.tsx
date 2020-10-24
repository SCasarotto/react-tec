import React from 'react'
import { render } from '@testing-library/react'
import { TENetworkActivity } from './TENetworkActivity'

describe('TENetworkActivity', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TENetworkActivity visible />)
		expect(asFragment()).toMatchSnapshot()
	})
})
