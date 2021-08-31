import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { FileManagerRow } from './FileManagerRow';

describe('FileManagerRow', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <FileManagerRow
        labelForKey='testFileManagerRow'
        fileSrcArray={[]}
        onRemove={async () => jest.fn()}
        onUpload={async () => jest.fn()}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <FileManagerRow
        className='myClassName'
        labelForKey='testFileManagerRow'
        fileSrcArray={[]}
        onRemove={async () => jest.fn()}
        onUpload={async () => jest.fn()}
      />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLInputElement | null } = { current: null };
    const { getByTestId } = render(
      <FileManagerRow
        labelForKey='testFileManagerRow'
        fileSrcArray={[]}
        onRemove={async () => jest.fn()}
        onUpload={async () => jest.fn()}
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
