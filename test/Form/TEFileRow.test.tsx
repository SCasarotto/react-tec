import React from 'react'
import ReactDOM from 'react-dom'
import { TEFileRow } from './../../src'

describe('TEFileRow', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEFileRow labelForKey='testTEFileRow' />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})