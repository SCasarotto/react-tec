import React from 'react'
import ReactDOM from 'react-dom'
import { useLocation } from 'react-router'
import { useScrollTop } from './useScrollTop'
import { TEAppWrapper } from '../../Globals/TEAppWrapper'
import { mockOnScroll } from '../../helpers/testHelpers'

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
