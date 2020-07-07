import React from 'react'
import ReactDOM from 'react-dom'
import { TEMultiStepForm } from '../..'

describe('TEMultiStepForm', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TEMultiStepForm stepData={[]} onSubmit={async () => {}} />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
