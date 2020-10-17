import React from 'react'
import ReactDOM from 'react-dom'
import { TEThemeProvider } from './TEThemeContext'

describe('TEThemeProvider', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEThemeProvider />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
