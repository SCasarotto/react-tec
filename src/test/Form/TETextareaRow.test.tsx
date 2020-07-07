import React from 'react'
import ReactDOM from 'react-dom'
import { TETextareaRow } from '../..'

describe('TETextareaRow', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TETextareaRow labelForKey='testTETextareaRow' />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
