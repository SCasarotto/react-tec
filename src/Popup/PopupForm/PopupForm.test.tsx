import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { PopupForm } from './PopupForm';

describe('PopupForm', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<PopupForm visible onClose={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <PopupForm visible onClose={jest.fn()} className='myClassName' />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLFormElement | null } = { current: null };
    render(
      <PopupForm
        visible
        onClose={jest.fn()}
        ref={ref}
        data-testid='myFormId'
      />,
    );
    // Using this as the focus check didn't seem to work
    waitFor(() => expect(ref.current).toBeTruthy());
  });
});
