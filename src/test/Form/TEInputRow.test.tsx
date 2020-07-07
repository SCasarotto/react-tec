import React from 'react'
import ReactDOM from 'react-dom'
import { TEInputRow } from '../..'

describe('TEInputRow', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEInputRow labelForKey='testTEInputRow' />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
