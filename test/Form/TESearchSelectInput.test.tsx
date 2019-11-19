import React from 'react'
import ReactDOM from 'react-dom'
import { TESearchSelectInput } from './../../src'

describe('TESearchSelectInput', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TESearchSelectInput onChange={() => {}} />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
