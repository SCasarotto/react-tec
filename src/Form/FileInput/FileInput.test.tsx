import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { FileInput } from './FileInput';

describe('FileInput', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<FileInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<FileInput className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLInputElement | null } = { current: null };
    const { getByTestId } = render(
      <FileInput ref={ref} data-testid='myFileInput' />,
    );
    const fileInput = getByTestId('myFileInput');
    await waitFor(() => expect(fileInput).not.toHaveFocus());
    ref.current?.focus();
    await waitFor(() => expect(fileInput).toHaveFocus());
  });
});
