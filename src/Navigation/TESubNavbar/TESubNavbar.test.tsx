import React from 'react'
import { render } from '@testing-library/react'
import { TESubNavbar } from './TESubNavbar'
import { TEAppWrapper } from './../../Globals/TEAppWrapper'
import { mockOnScroll } from '../../helpers/testHelpers'

describe('TESubNavbar', () => {
	mockOnScroll()
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEAppWrapper>
				<TESubNavbar links={[]} />
			</TEAppWrapper>,
		)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEAppWrapper>
				<TESubNavbar links={[]} className='myClassName' />
			</TEAppWrapper>,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
