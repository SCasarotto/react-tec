import React from 'react'
import { render } from '@testing-library/react'
import { TEButton } from './TEButton'

describe('TEButton', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEButton>My Test Button</TEButton>)
		expect(asFragment()).toMatchSnapshot()
	})
})
