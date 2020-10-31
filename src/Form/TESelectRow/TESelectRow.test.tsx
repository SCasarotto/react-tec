import React from 'react'
import { render, waitFor } from '@testing-library/react'
import Select from 'react-select'
import { TESelectRow } from './TESelectRow'
import { TEThemeProvider } from './../../Globals/TEThemeContext'

describe('TESelectRow', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEThemeProvider>
				<TESelectRow labelForKey='testTESelectRow' />
			</TEThemeProvider>,
		)
		expect(asFragment()).toMatchSnapshot()
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEThemeProvider>
				<TESelectRow className='myClassName' />
			</TEThemeProvider>,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: Select | null } = { current: null }
		const { container } = render(
			<TEThemeProvider>
				<TESelectRow ref={ref} id='myInputId' />
			</TEThemeProvider>,
		)
		const searchSelect = container.querySelector("input[type='text']")
		await waitFor(() => expect(searchSelect).not.toHaveFocus())
		ref.current?.focus()
		await waitFor(() => expect(searchSelect).toHaveFocus())
	})
})
