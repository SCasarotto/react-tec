import React from 'react'
import { render } from '@testing-library/react'
import { TESideNavLink } from './TESideNavLink'
import { TEAppWrapper } from './../../Globals/TEAppWrapper'
import { mockOnScroll } from '../../helpers/testHelpers'

describe('TESideNavLink', () => {
	mockOnScroll()
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEAppWrapper>
				<TESideNavLink title='MyTitle' to='/SomeURL' />
			</TEAppWrapper>,
		)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEAppWrapper>
				<TESideNavLink title='MyTitle' to='/SomeURL' className='myClassName' />
			</TEAppWrapper>,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
