import React from 'react'
import { render } from '@testing-library/react'
import { TEMultiStepForm } from './TEMultiStepForm'

describe('TEMultiStepForm', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEMultiStepForm stepData={[]} onSubmit={async () => {}} />)
		expect(asFragment()).toMatchSnapshot()
	})
})
