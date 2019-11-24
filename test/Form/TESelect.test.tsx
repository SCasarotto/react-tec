import React from 'react'
import ReactDOM from 'react-dom'
import { TESelect, TEThemeProvider } from '../../src'

describe('TESelect', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEThemeProvider>
				<TESelect />
			</TEThemeProvider>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
