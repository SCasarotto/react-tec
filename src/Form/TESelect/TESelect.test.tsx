import React from 'react'
import { render } from '@testing-library/react'
import { TESelect } from './TESelect'
import { TEThemeProvider } from './../../Globals/TEThemeContext'

describe('TESelect', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEThemeProvider>
				<TESelect />
			</TEThemeProvider>,
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
