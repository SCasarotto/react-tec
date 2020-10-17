import React from 'react'
import ReactDOM from 'react-dom'
import { TEInput } from './TEInput'

describe('TEInput', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEInput />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
