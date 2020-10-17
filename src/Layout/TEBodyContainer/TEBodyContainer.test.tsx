import React from 'react'
import ReactDOM from 'react-dom'
import { TEBodyContainer } from './TEBodyContainer'

describe('TEBodyContainer', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEBodyContainer />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
