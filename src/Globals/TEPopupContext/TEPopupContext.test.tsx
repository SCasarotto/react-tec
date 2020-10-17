import React from 'react'
import ReactDOM from 'react-dom'
import { TEPopupProvider } from './TEPopupContext'

describe('TEPopupProvider', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEPopupProvider />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
