import React from 'react'
import ReactDOM from 'react-dom'
import { TEPanel } from '../..'

describe('TEPanel', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEPanel />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
