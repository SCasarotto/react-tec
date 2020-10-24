import React from 'react'
import { render } from '@testing-library/react'
import { TEPopup } from './TEPopup'

describe('TEPopup', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPopup visible />)
		expect(asFragment()).toMatchSnapshot()
	})
})
