import React from 'react'
import ReactDOM from 'react-dom'
import { useScrollTop, TEAppWrapper } from '../..'
import { mockOnScroll } from '../testHelpers'
import { useLocation } from 'react-router'

const ScrollTopComponent: React.FC = () => {
	const location = useLocation()
	useScrollTop(location)
	return null
}

describe('useScrollTop', () => {
	mockOnScroll()
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEAppWrapper>
				<ScrollTopComponent />
			</TEAppWrapper>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
