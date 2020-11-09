import React from 'react'
import { render } from '@testing-library/react'
import { TEPrivateRoute } from './TEPrivateRoute'
import { TEAppWrapper } from './../../Globals/TEAppWrapper'
import { mockOnScroll } from '../../helpers/testHelpers'

describe('TEPrivateRoute', () => {
	mockOnScroll()
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEAppWrapper>
				<TEPrivateRoute />
			</TEAppWrapper>,
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
