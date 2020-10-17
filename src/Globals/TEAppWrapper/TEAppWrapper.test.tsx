import React from 'react'
import ReactDOM from 'react-dom'
import { TEAppWrapper } from './TEAppWrapper'
import { mockOnScroll } from '../../helpers/testHelpers'

describe('TEAppWrapper', () => {
	mockOnScroll()
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEAppWrapper />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})