import React from 'react'
import ReactDOM from 'react-dom'
import { TESideNavLink, TEAppWrapper } from '../..'
import { mockOnScroll } from '../../helpers/testHelpers'

describe('TESideNavLink', () => {
	mockOnScroll()
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEAppWrapper>
				<TESideNavLink title='MyTitle' to='/SomeURL' />
			</TEAppWrapper>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
