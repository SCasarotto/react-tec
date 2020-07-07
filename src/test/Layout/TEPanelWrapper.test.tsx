import React from 'react'
import ReactDOM from 'react-dom'
import { TEPanelWrapper } from '../..'

describe('TEPanelWrapper', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEPanelWrapper />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
