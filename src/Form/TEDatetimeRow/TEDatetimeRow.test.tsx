import React from 'react'
import ReactDOM from 'react-dom'
import { TEDatetimeRow } from './TEDatetimeRow'

describe('TEDatetimeRow', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEDatetimeRow labelForKey='testTEDatetimeRow' onChange={() => {}} />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
