import React from 'react'
import ReactDOM from 'react-dom'
import { TESelectRow } from '../../src'

describe('TESelectRow', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TESelectRow labelForKey='testTESelectRow' />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
