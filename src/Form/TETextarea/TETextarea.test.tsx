import React from 'react'
import ReactDOM from 'react-dom'
import { TETextarea } from './TETextarea'

describe('TETextarea', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TETextarea />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
