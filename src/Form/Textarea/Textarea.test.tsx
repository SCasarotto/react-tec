import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { Textarea } from './Textarea';

describe('Textarea', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<Textarea />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<Textarea className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLTextAreaElement | null } = { current: null };
    const { getByTestId } = render(
      <Textarea ref={ref} data-testid='myInput' />,
    );
    const input = getByTestId('myInput');
    await waitFor(() => expect(input).not.toHaveFocus());
    ref.current?.focus();
    await waitFor(() => expect(input).toHaveFocus());
  });
});
