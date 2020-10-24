import React from 'react'
import { render } from '@testing-library/react'
import { TEPanelTitle } from './TEPanelTitle'

describe('TEPanelTitle', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPanelTitle />)
		expect(asFragment()).toMatchSnapshot()
	})
})
