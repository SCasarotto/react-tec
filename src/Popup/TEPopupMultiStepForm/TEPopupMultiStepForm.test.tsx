import React from 'react'
import { render } from '@testing-library/react'
import { TEPopupMultiStepForm } from './TEPopupMultiStepForm'

describe('TEPopupMultiStepForm', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEPopupMultiStepForm
				visible
				stepData={[]}
				onClose={() => {}}
				onSubmit={async () => {}}
			/>,
		)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEPopupMultiStepForm
				visible
				stepData={[]}
				onClose={() => {}}
				onSubmit={async () => {}}
				className='myClassName'
			/>,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
