import React from 'react'
import ReactDOM from 'react-dom'
import { TEErrorLoadingAlert } from '../..'

describe('TEErrorLoadingAlert', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEErrorLoadingAlert />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
