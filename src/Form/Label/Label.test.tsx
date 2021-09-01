import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { Label } from './Label';

describe('Label', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<Label />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<Label className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLLabelElement | null } = { current: null };
    render(<Label ref={ref} data-testid='myLabel' />);
    // Using this as the focus check didn't seem to work
    waitFor(() => expect(ref.current).toBeTruthy());
  });
});
