import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { CheckboxInput } from './CheckboxInput';

describe('CheckboxInput', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<CheckboxInput />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// Checked
it('renders checked undefined', () => {
  const { getByTestId } = render(
    <CheckboxInput data-testid='myCheckboxInput' />,
  );
  const checkboxInput = getByTestId('myCheckboxInput');
  expect(checkboxInput).not.toBeChecked();
});
it('renders checked false', () => {
  const { getByTestId } = render(
    <CheckboxInput
      checked={false}
      onChange={jest.fn()}
      data-testid='myCheckboxInput'
    />,
  );
  const checkboxInput = getByTestId('myCheckboxInput');
  expect(checkboxInput).not.toBeChecked();
});
it('renders checked true', () => {
  const { getByTestId } = render(
    <CheckboxInput
      checked
      onChange={jest.fn()}
      data-testid='myCheckboxInput'
    />,
  );
  const checkboxInput = getByTestId('myCheckboxInput');
  expect(checkboxInput).toBeChecked();
});

// Disabled
it('renders disabled undefined', () => {
  const { getByTestId } = render(
    <CheckboxInput data-testid='myCheckboxInput' />,
  );
  const checkboxInput = getByTestId('myCheckboxInput');
  expect(checkboxInput).not.toHaveAttribute('disabled');
});
it('renders disabled false', () => {
  const { getByTestId } = render(
    <CheckboxInput
      disabled={false}
      onChange={jest.fn()}
      data-testid='myCheckboxInput'
    />,
  );
  const checkboxInput = getByTestId('myCheckboxInput');
  expect(checkboxInput).not.toHaveAttribute('disabled');
});
it('renders disabled true', () => {
  const { getByTestId } = render(
    <CheckboxInput
      disabled
      onChange={jest.fn()}
      data-testid='myCheckboxInput'
    />,
  );
  const checkboxInput = getByTestId('myCheckboxInput');
  expect(checkboxInput).toHaveAttribute('disabled');
});

// Class Name
it('accepts custom className', () => {
  const { container } = render(<CheckboxInput className='myClassName' />);
  expect(container.firstChild).toHaveClass('myClassName');
});

// Ref
it('renders with ref', async () => {
  const ref: { current: HTMLInputElement | null } = { current: null };
  const { getByTestId } = render(
    <CheckboxInput ref={ref} data-testid='myCheckboxInput' />,
  );
  const checkboxInput = getByTestId('myCheckboxInput');
  await waitFor(() => expect(checkboxInput).not.toHaveFocus());
  ref.current?.focus();
  await waitFor(() => expect(checkboxInput).toHaveFocus());
});
