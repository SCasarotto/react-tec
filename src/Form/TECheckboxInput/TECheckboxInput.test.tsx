import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TECheckboxInput } from './TECheckboxInput'

describe('TECheckboxInput', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TECheckboxInput />)
		expect(asFragment()).toMatchSnapshot()
	})
})

// Checked
it('renders checked undefined', () => {
	const { getByTestId } = render(<TECheckboxInput data-testid='myCheckboxInput' />)
	const checkboxInput = getByTestId('myCheckboxInput')
	expect(checkboxInput).not.toBeChecked()
})
it('renders checked false', () => {
	const { getByTestId } = render(
		<TECheckboxInput checked={false} onChange={() => {}} data-testid='myCheckboxInput' />,
	)
	const checkboxInput = getByTestId('myCheckboxInput')
	expect(checkboxInput).not.toBeChecked()
})
it('renders checked true', () => {
	const { getByTestId } = render(
		<TECheckboxInput checked onChange={() => {}} data-testid='myCheckboxInput' />,
	)
	const checkboxInput = getByTestId('myCheckboxInput')
	expect(checkboxInput).toBeChecked()
})

// Disabled
it('renders disabled undefined', () => {
	const { getByTestId } = render(<TECheckboxInput data-testid='myCheckboxInput' />)
	const checkboxInput = getByTestId('myCheckboxInput')
	expect(checkboxInput).not.toHaveAttribute('disabled')
})
it('renders disabled false', () => {
	const { getByTestId } = render(
		<TECheckboxInput disabled={false} onChange={() => {}} data-testid='myCheckboxInput' />,
	)
	const checkboxInput = getByTestId('myCheckboxInput')
	expect(checkboxInput).not.toHaveAttribute('disabled')
})
it('renders disabled true', () => {
	const { getByTestId } = render(
		<TECheckboxInput disabled onChange={() => {}} data-testid='myCheckboxInput' />,
	)
	const checkboxInput = getByTestId('myCheckboxInput')
	expect(checkboxInput).toHaveAttribute('disabled')
})

// Class Name
it('accepts custom className', () => {
	const { container } = render(<TECheckboxInput className='myClassName' />)
	expect(container.firstChild).toHaveClass('myClassName')
})

// Ref
it('renders with ref', async () => {
	const ref: { current: HTMLInputElement | null } = { current: null }
	const { getByTestId } = render(<TECheckboxInput ref={ref} data-testid='myCheckboxInput' />)
	const checkboxInput = getByTestId('myCheckboxInput')
	await waitFor(() => expect(checkboxInput).not.toHaveFocus())
	ref.current?.focus()
	await waitFor(() => expect(checkboxInput).toHaveFocus())
})
