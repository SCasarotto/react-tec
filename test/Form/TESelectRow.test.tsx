import React from 'react'
import ReactDOM from 'react-dom'
import { TESelectRow, TEThemeProvider } from '../../src'

describe('TESelectRow', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEThemeProvider>
				<TESelectRow labelForKey='testTESelectRow' />
			</TEThemeProvider>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
