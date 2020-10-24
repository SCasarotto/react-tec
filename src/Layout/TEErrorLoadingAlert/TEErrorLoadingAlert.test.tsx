import React from 'react'
import { render } from '@testing-library/react'
import { TEErrorLoadingAlert } from './TEErrorLoadingAlert'

describe('TEErrorLoadingAlert', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEErrorLoadingAlert />)
		expect(asFragment()).toMatchSnapshot()
	})
})
