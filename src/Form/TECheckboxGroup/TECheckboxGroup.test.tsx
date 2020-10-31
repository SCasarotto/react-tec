import React from 'react'
import { render } from '@testing-library/react'
import { TECheckboxGroup } from './TECheckboxGroup'

describe('TECheckboxGroup', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TECheckboxGroup
				labelForKey='testTECheckboxGroup'
				onChange={() => {}}
				buttonArray={['someValue', 'AnotherValue']}
				checkedValues={['someValue']}
			/>,
		)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TECheckboxGroup
				className='myClassName'
				labelForKey='testTECheckboxGroup'
				onChange={() => {}}
				buttonArray={['someValue', 'AnotherValue']}
				checkedValues={['someValue']}
			/>,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})
})
