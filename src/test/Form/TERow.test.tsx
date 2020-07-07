import React from 'react'
import ReactDOM from 'react-dom'
import { TERow } from '../..'

describe('TERow', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TERow />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
