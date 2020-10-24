import React from 'react'
import { render } from '@testing-library/react'
import { TEInput } from './TEInput'

describe('TEInput', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEInput />)
		expect(asFragment()).toMatchSnapshot()
	})
})
