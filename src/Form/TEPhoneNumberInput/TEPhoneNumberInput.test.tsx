import React from 'react'
import ReactDOM from 'react-dom'
import { TEPhoneNumberInput } from './TEPhoneNumberInput'

describe('TEPhoneNumberInput', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEPhoneNumberInput onChange={() => {}} value='' />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
