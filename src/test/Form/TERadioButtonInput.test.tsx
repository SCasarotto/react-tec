import React from 'react'
import ReactDOM from 'react-dom'
import { TERadioButtonInput } from '../..'

describe('TERadioButtonInput', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TERadioButtonInput />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
