import React from 'react'
import { render } from '@testing-library/react'
import { TEMenuButton } from './TEMenuButton'
import { TEAppWrapper } from './../../Globals/TEAppWrapper'
import { mockOnScroll } from '../../helpers/testHelpers'

describe('TEMenuButton', () => {
	mockOnScroll()
	it('matches snapshot', () => {
		const { asFragment } = render(
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
		)
		expect(asFragment()).toMatchSnapshot()
	})
})
