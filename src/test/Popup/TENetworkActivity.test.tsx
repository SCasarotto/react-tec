import React from 'react'
import ReactDOM from 'react-dom'
import { TENetworkActivity } from '../..'

describe('TENetworkActivity', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TENetworkActivity visible />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
