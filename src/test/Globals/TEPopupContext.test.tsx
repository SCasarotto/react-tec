import React from 'react'
import ReactDOM from 'react-dom'
import { TEPopupProvider } from '../..'

describe('TEPopupProvider', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEPopupProvider />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
