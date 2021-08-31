import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { RadioButtonInput } from './RadioButtonInput';

describe('RadioButtonInput', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<RadioButtonInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Checked
  it('renders checked undefined', () => {
    const { getByTestId } = render(
      <RadioButtonInput data-testid='myRadioButtonInput' />,
    );
    const radioButtonInput = getByTestId('myRadioButtonInput');
    expect(radioButtonInput).not.toBeChecked();
  });
  it('renders checked false', () => {
    const { getByTestId } = render(
      <RadioButtonInput
        checked={false}
        onChange={jest.fn()}
        data-testid='myRadioButtonInput'
      />,
    );
    const radioButtonInput = getByTestId('myRadioButtonInput');
    expect(radioButtonInput).not.toBeChecked();
  });
  it('renders checked true', () => {
    const { getByTestId } = render(
      <RadioButtonInput
        checked
        onChange={jest.fn()}
        data-testid='myRadioButtonInput'
      />,
    );
    const radioButtonInput = getByTestId('myRadioButtonInput');
    expect(radioButtonInput).toBeChecked();
  });

  // Disabled
  it('renders disabled undefined', () => {
    const { getByTestId } = render(
      <RadioButtonInput data-testid='myRadioButtonInput' />,
    );
    const radioButtonInput = getByTestId('myRadioButtonInput');
    expect(radioButtonInput).not.toHaveAttribute('disabled');
  });
  it('renders disabled false', () => {
    const { getByTestId } = render(
      <RadioButtonInput
        disabled={false}
        onChange={jest.fn()}
        data-testid='myRadioButtonInput'
      />,
    );
    const radioButtonInput = getByTestId('myRadioButtonInput');
    expect(radioButtonInput).not.toHaveAttribute('disabled');
  });
  it('renders disabled true', () => {
    const { getByTestId } = render(
      <RadioButtonInput
        disabled
        onChange={jest.fn()}
        data-testid='myRadioButtonInput'
      />,
    );
    const radioButtonInput = getByTestId('myRadioButtonInput');
    expect(radioButtonInput).toHaveAttribute('disabled');
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<RadioButtonInput className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLInputElement | null } = { current: null };
    const { getByTestId } = render(
      <RadioButtonInput ref={ref} data-testid='myRadioButtonInput' />,
    );
    const radioButtonInput = getByTestId('myRadioButtonInput');
    await waitFor(() => expect(radioButtonInput).not.toHaveFocus());
    ref.current?.focus();
    await waitFor(() => expect(radioButtonInput).toHaveFocus());
  });
});
