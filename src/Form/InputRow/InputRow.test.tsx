import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { InputRow } from './InputRow';

describe('InputRow', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<InputRow labelForKey='testInputRow' />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <InputRow labelForKey='testInputRow' className='myClassName' />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLInputElement | null } = { current: null };
    const { getByTestId } = render(
      <InputRow labelForKey='testInputRow' ref={ref} data-testid='myInput' />,
    );
    const input = getByTestId('myInput');
    await waitFor(() => expect(input).not.toHaveFocus());
    ref.current?.focus();
    await waitFor(() => expect(input).toHaveFocus());
  });
});
