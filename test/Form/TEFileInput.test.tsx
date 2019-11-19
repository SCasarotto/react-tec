import React from 'react'
import ReactDOM from 'react-dom'
import { TEFileInput } from './../../src'

describe('TEFileInput', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEFileInput />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
