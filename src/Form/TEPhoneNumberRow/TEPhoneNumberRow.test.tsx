import React from 'react'
import ReactDOM from 'react-dom'
import { TEPhoneNumberRow } from './TEPhoneNumberRow'

describe('TEPhoneNumberRow', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEPhoneNumberRow labelForKey='testTEPhoneNumberRow' onChange={() => {}} value='' />,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
	it('renders with all props', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEPhoneNumberRow
				labelForKey='testTEPhoneNumberRow'
				title='Title'
				name='NAME'
				onChange={() => {}}
				value=''
			/>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
