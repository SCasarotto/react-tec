import React from 'react'
import ReactDOM from 'react-dom'
import { TEPopupForm } from '../..'

describe('TEPopupForm', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEPopupForm visible onClose={() => {}} />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
