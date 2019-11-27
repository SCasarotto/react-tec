import React from 'react'
import ReactDOM from 'react-dom'
import { TEMenuButton } from '../../src'

describe('TEMenuButton', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEMenuButton>My Test Button</TEMenuButton>, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
