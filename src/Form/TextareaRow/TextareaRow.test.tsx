import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { TextareaRow } from './TextareaRow';

describe('TextareaRow', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <TextareaRow labelForKey='testTextareaRow' />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <TextareaRow labelForKey='testTextareaRow' className='myClassName' />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLTextAreaElement | null } = { current: null };
    const { getByTestId } = render(
      <TextareaRow
        labelForKey='testTextareaRow'
        ref={ref}
        data-testid='myInput'
      />,
    );
    const input = getByTestId('myInput');
    await waitFor(() => expect(input).not.toHaveFocus());
    ref.current?.focus();
    await waitFor(() => expect(input).toHaveFocus());
  });
});
