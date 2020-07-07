import React from 'react'
import ReactDOM from 'react-dom'
import { TEConfirm } from '../..'

describe('TEConfirm', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEConfirm visible />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
