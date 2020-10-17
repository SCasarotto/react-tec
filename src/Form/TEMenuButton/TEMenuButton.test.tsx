import React from 'react'
import ReactDOM from 'react-dom'
import { TEMenuButton } from './TEMenuButton'
import { TEAppWrapper } from './../../Globals/TEAppWrapper'
import { mockOnScroll } from '../../helpers/testHelpers'

describe('TEMenuButton', () => {
	mockOnScroll()
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEAppWrapper>
				<TEMenuButton title='My Menu Button'>
					{({ hideMenu }) => (
						<div>
							<button
								onClick={() => {
									alert('Press!1')
									hideMenu()
								}}
							>
								My Button1
							</button>
							<button
								onClick={() => {
									alert('Press!2')
									hideMenu()
								}}
							>
								My Button2
							</button>
							<button
								onClick={() => {
									alert('Press!3')
									hideMenu()
								}}
							>
								My Button3
							</button>
						</div>
					)}
				</TEMenuButton>
			</TEAppWrapper>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})