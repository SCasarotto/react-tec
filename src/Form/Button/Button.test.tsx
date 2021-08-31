import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<Button>My Test Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <Button className='myClassName'>My Test Button</Button>,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLButtonElement | null } = { current: null };
    const { getByTestId } = render(<Button ref={ref} data-testid='myButton' />);
    const button = getByTestId('myButton');
    await waitFor(() => expect(button).not.toHaveFocus());
    ref.current?.focus();
    await waitFor(() => expect(button).toHaveFocus());
  });
});
