import React from 'react'
import { render } from '@testing-library/react'
import { TEAppWrapper } from './TEAppWrapper'
import { mockOnScroll } from '../../helpers/testHelpers'

describe('TEAppWrapper', () => {
	mockOnScroll()
	it('matches snapshot', () => {
		const { asFragment } = render(<TEAppWrapper />)
		expect(asFragment()).toMatchSnapshot()
	})
})
