import React from 'react'
import { render, waitFor } from '@testing-library/react'
import Select from 'react-select'
import { TESelect } from './TESelect'
import { TEThemeProvider } from './../../Globals/TEThemeContext'

describe('TESelect', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(
			<TEThemeProvider>
				<TESelect />
			</TEThemeProvider>,
		)
		expect(asFragment()).toMatchSnapshot()
	})
	// Class Name
	it('accepts custom className', () => {
		const { container } = render(
			<TEThemeProvider>
				<TESelect className='myClassName' />
			</TEThemeProvider>,
		)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: Select | null } = { current: null }
		const { container } = render(
			<TEThemeProvider>
				<TESelect ref={ref} id='myInputId' />
			</TEThemeProvider>,
		)
		const searchSelect = container.querySelector("input[type='text']")
		await waitFor(() => expect(searchSelect).not.toHaveFocus())
		ref.current?.focus()
		await waitFor(() => expect(searchSelect).toHaveFocus())
	})
})
