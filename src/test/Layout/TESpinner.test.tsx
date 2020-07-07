import React from 'react'
import ReactDOM from 'react-dom'
import { TESpinner } from '../..'

describe('TESpinner', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TESpinner />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
