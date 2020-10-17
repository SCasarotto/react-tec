import React from 'react'
import ReactDOM from 'react-dom'
import { TEForm } from './TEForm'

describe('TEForm', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEForm />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
