import React from 'react'
import ReactDOM from 'react-dom'
import { TESelectRow } from './TESelectRow'
import { TEThemeProvider } from './../../Globals/TEThemeContext'

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