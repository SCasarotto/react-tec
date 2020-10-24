import React from 'react'
import { render } from '@testing-library/react'
import { TEPanelWrapper } from './TEPanelWrapper'

describe('TEPanelWrapper', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPanelWrapper />)
		expect(asFragment()).toMatchSnapshot()
	})
})
