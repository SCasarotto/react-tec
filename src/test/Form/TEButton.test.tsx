import React from 'react'
import ReactDOM from 'react-dom'
import { TEButton } from '../..'

describe('TEButton', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEButton>My Test Button</TEButton>, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
