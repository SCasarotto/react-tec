import React from 'react'
import ReactDOM from 'react-dom'
import { TETitleBar } from './TETitleBar'

describe('TETitleBar', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TETitleBar />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
