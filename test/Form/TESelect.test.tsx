import React from 'react'
import ReactDOM from 'react-dom'
import { TESelect } from '../../src'

describe('TESelect', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TESelect />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
