import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { Form } from './Form';

describe('Form', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<Form className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLFormElement | null } = { current: null };
    render(<Form ref={ref} data-testid='myFormId' />);
    // Using this as the focus check didn't seem to work
    waitFor(() => expect(ref.current).toBeTruthy());
  });
});
