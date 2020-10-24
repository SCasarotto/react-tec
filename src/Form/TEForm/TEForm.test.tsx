import React from 'react'
import { render } from '@testing-library/react'
import { TEForm } from './TEForm'

describe('TEForm', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEForm />)
		expect(asFragment()).toMatchSnapshot()
	})
})
