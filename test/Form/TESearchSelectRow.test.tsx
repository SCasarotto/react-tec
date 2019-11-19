import React from 'react'
import ReactDOM from 'react-dom'
import { TESearchSelectRow } from './../../src'

describe('TESearchSelectRow', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TESearchSelectRow labelForKey='testTESearchSelectRow' onChange={() => {}} />,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
