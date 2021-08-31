import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { FormRow } from './FormRow';

describe('FormRow', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<FormRow />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<FormRow className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLDivElement | null } = { current: null };
    const { getByTestId } = render(
      <FormRow ref={ref} data-testid='myFormRow' />,
    );
    getByTestId('myFormRow');
    // Using this as the focus check didn't seem to work
    waitFor(() => expect(ref.current).toBeTruthy());
  });
});
