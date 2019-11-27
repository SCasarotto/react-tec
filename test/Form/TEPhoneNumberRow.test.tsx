import React from 'react'
import ReactDOM from 'react-dom'
import { TEPhoneNumberRow } from '../../src'

describe('TEPhoneNumberRow', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEPhoneNumberRow labelForKey='testTEPhoneNumberRow' onChange={() => {}} value='' />,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
