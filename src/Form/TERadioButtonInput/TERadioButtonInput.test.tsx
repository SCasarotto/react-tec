import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { TERadioButtonInput } from './TERadioButtonInput'

describe('TERadioButtonInput', () => {
	// Renders Without Error
	it('matches snapshot', () => {
		const { asFragment } = render(<TERadioButtonInput />)
		expect(asFragment()).toMatchSnapshot()
	})

	// Checked
	it('renders checked undefined', () => {
		const { getByTestId } = render(<TERadioButtonInput data-testid='myRadioButtonInput' />)
		const radioButtonInput = getByTestId('myRadioButtonInput')
		expect(radioButtonInput).not.toBeChecked()
	})
	it('renders checked false', () => {
		const { getByTestId } = render(
			<TERadioButtonInput
				checked={false}
				onChange={() => {}}
				data-testid='myRadioButtonInput'
			/>,
		)
		const radioButtonInput = getByTestId('myRadioButtonInput')
		expect(radioButtonInput).not.toBeChecked()
	})
	it('renders checked true', () => {
		const { getByTestId } = render(
			<TERadioButtonInput checked onChange={() => {}} data-testid='myRadioButtonInput' />,
		)
		const radioButtonInput = getByTestId('myRadioButtonInput')
		expect(radioButtonInput).toBeChecked()
	})

	// Disabled
	it('renders disabled undefined', () => {
		const { getByTestId } = render(<TERadioButtonInput data-testid='myRadioButtonInput' />)
		const radioButtonInput = getByTestId('myRadioButtonInput')
		expect(radioButtonInput).not.toHaveAttribute('disabled')
	})
	it('renders disabled false', () => {
		const { getByTestId } = render(
			<TERadioButtonInput
				disabled={false}
				onChange={() => {}}
				data-testid='myRadioButtonInput'
			/>,
		)
		const radioButtonInput = getByTestId('myRadioButtonInput')
		expect(radioButtonInput).not.toHaveAttribute('disabled')
	})
	it('renders disabled true', () => {
		const { getByTestId } = render(
			<TERadioButtonInput disabled onChange={() => {}} data-testid='myRadioButtonInput' />,
		)
		const radioButtonInput = getByTestId('myRadioButtonInput')
		expect(radioButtonInput).toHaveAttribute('disabled')
	})

	// Class Name
	it('accepts custom className', () => {
		const { container } = render(<TERadioButtonInput className='myClassName' />)
		expect(container.firstChild).toHaveClass('myClassName')
	})

	// Ref
	it('renders with ref', async () => {
		const ref: { current: HTMLInputElement | null } = { current: null }
		const { getByTestId } = render(
			<TERadioButtonInput ref={ref} data-testid='myRadioButtonInput' />,
		)
		const radioButtonInput = getByTestId('myRadioButtonInput')
		await waitFor(() => expect(radioButtonInput).not.toHaveFocus())
		ref.current?.focus()
		await waitFor(() => expect(radioButtonInput).toHaveFocus())
	})
})
