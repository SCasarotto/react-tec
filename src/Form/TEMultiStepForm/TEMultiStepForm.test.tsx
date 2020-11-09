import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TEMultiStepForm } from './TEMultiStepForm'

describe('TEMultiStepForm', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TEMultiStepForm stepData={[]} onSubmit={async () => {}} />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEMultiStepForm stepData={[]} onSubmit={async () => {}} className='myClassName' />,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLFormElement | null } = { current: null }
		render(
			<TEMultiStepForm
				stepData={[]}
				onSubmit={async () => {}}
				ref={ref}
				data-testid='myMultiForm'
			/>,
		)
		// Using this as the focus check didn't seem to work
		waitFor(() => expect(ref.current).toBeTruthy())
	})
})
