import React from 'react'
import ReactDOM from 'react-dom'
import { TESubNavbar, TEAppWrapper } from '../..'
import { mockOnScroll } from '../../helpers/testHelpers'

describe('TESubNavbar', () => {
	mockOnScroll()
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEAppWrapper>
				<TESubNavbar links={[]} />
			</TEAppWrapper>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
