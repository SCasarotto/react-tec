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
})
