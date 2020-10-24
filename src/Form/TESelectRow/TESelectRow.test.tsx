import React from 'react'
import { render } from '@testing-library/react'
import { TESelectRow } from './TESelectRow'
import { TEThemeProvider } from './../../Globals/TEThemeContext'

describe('TESelectRow', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEThemeProvider>
				<TESelectRow labelForKey='testTESelectRow' />
			</TEThemeProvider>,
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
