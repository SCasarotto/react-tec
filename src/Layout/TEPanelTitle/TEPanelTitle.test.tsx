import React from 'react'
import ReactDOM from 'react-dom'
import { TEPanelTitle } from './TEPanelTitle'

describe('TEPanelTitle', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEPanelTitle />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
