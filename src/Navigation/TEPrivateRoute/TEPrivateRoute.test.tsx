import React from 'react'
import ReactDOM from 'react-dom'
import { TEPrivateRoute } from './TEPrivateRoute'
import { TEAppWrapper } from './../../Globals/TEAppWrapper'
import { mockOnScroll } from '../../helpers/testHelpers'

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
