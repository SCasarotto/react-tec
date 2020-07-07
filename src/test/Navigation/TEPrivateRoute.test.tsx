import React from 'react'
import ReactDOM from 'react-dom'
import { TEPrivateRoute, TEAppWrapper } from '../..'
import { mockOnScroll } from '../testHelpers'

describe('TEPrivateRoute', () => {
	mockOnScroll()
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEAppWrapper>
				<TEPrivateRoute />
			</TEAppWrapper>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
