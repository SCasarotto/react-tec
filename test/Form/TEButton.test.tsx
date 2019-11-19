import React from 'react'
import ReactDOM from 'react-dom'
import { TEButton } from './../../src'

describe('TEButton', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEButton />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
