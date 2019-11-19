import React from 'react'
import ReactDOM from 'react-dom'
import { TECheckboxGroup } from '../../src'

describe('TECheckboxGroup', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TECheckboxGroup
				labelForKey='testTECheckboxGroup'
				onChange={() => {}}
				buttonArray={['someValue', 'AnotherValue']}
				checkedValues={['someValue']}
			/>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
