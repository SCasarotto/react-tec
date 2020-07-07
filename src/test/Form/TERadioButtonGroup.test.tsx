import React from 'react'
import ReactDOM from 'react-dom'
import { TERadioButtonGroup } from '../..'

describe('TERadioButtonGroup', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TERadioButtonGroup
				labelForKey='testTERadioButtonGroup'
				checkedValue='someValue'
				buttonArray={['someValue', 'otherValue']}
				onChange={() => {}}
			/>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
