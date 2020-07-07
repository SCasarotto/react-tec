import React from 'react'
import ReactDOM from 'react-dom'
import { TEDatetimeInput } from '../..'

describe('TEDatetimeInput', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEDatetimeInput onChange={() => {}} />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
