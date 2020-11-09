import React from 'react'
import { render, waitFor } from '@testing-library/react'
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

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLFormElement | null } = { current: null }
		render(
			<TEPopupMultiStepForm
				visible
				stepData={[]}
				onClose={() => {}}
				onSubmit={async () => {}}
				ref={ref}
				data-testid='myFormId'
			/>,
		)
		// Using this as the focus check didn't seem to work
		waitFor(() => expect(ref.current).toBeTruthy())
	})
})
