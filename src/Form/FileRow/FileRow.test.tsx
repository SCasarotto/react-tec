import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { FileRow } from './FileRow';

describe('FileRow', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<FileRow labelForKey='testFileRow' />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <FileRow className='myClassName' labelForKey='testFileRow' />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLInputElement | null } = { current: null };
    const { getByTestId } = render(
      <FileRow
        labelForKey='testFileManagerRow'
        ref={ref}
        data-testid='myFileInput'
      />,
    );
    const fileInput = getByTestId('myFileInput');
    await waitFor(() => expect(fileInput).not.toHaveFocus());
    ref.current?.focus();
    await waitFor(() => expect(fileInput).toHaveFocus());
  });
});
