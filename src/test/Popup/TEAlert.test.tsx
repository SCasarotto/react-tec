import React from 'react'
import ReactDOM from 'react-dom'
import { TEAlert } from '../..'

describe('TEAlert', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEAlert visible />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
