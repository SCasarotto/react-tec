import React from 'react'
import ReactDOM from 'react-dom'
import { TESelect, TEThemeProvider } from '../..'

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
	it('renders without custom generic type', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEThemeProvider>
				<TESelect<{ name: string }> />
			</TEThemeProvider>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
