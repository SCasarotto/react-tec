import React from 'react'
import { render } from '@testing-library/react'
import { TEThemeProvider } from './TEThemeContext'

describe('TEThemeContext', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEThemeProvider />)
		expect(asFragment()).toMatchSnapshot()
	})
})
