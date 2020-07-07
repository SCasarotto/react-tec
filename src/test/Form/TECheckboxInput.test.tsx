import React from 'react'
import ReactDOM from 'react-dom'
import { TECheckboxInput } from '../..'

describe('TECheckboxInput', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TECheckboxInput />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
