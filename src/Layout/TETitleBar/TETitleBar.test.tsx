import React from 'react'
import { render } from '@testing-library/react'
import { TETitleBar } from './TETitleBar'

describe('TETitleBar', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TETitleBar />)
		expect(asFragment()).toMatchSnapshot()
	})
})
