import React from 'react'
import ReactDOM from 'react-dom'
import { TEPopup } from '../..'

describe('TEPopup', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEPopup visible />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
