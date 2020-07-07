import React from 'react'
import ReactDOM from 'react-dom'
import { TESegmentedGroup } from '../..'

describe('TESegmentedGroup', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TESegmentedGroup
				labelForKey='testTESegmentedGroup'
				checkedValue='someValue'
				buttonArray={['someValue', 'anotherValue']}
				onChange={() => {}}
			/>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
