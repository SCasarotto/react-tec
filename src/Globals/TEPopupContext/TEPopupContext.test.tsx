import React from 'react'
import { render } from '@testing-library/react'
import { TEPopupProvider } from './TEPopupContext'

describe('TEPopupContext', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TEPopupProvider />)
		expect(asFragment()).toMatchSnapshot()
	})
})
