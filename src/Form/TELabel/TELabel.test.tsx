import React from 'react'
import ReactDOM from 'react-dom'
import { TELabel } from './TELabel'

describe('TELabel', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TELabel />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
