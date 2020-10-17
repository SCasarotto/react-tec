import React from 'react'
import ReactDOM from 'react-dom'
import { TEPopupMultiStepForm } from '../..'

describe('TEPopupMultiStepForm', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEPopupMultiStepForm
				visible
				stepData={[]}
				onClose={() => {}}
				onSubmit={async () => {}}
			/>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
