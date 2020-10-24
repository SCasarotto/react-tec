import React from 'react'
import { render } from '@testing-library/react'
import { TEFileInput } from './TEFileInput'

describe('TEFileInput', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEFileInput />)
		expect(asFragment()).toMatchSnapshot()
	})
})
