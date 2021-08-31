import React from 'react';

import { render } from '@testing-library/react';

import { ImageRow } from './ImageRow';

describe('ImageRow', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <ImageRow
        labelForKey='testImageRow'
        imgSrcArray={[]}
        onRemove={async () => jest.fn()}
        onUpload={async () => jest.fn()}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <ImageRow
        labelForKey='testImageRow'
        imgSrcArray={[]}
        onRemove={async () => jest.fn()}
        onUpload={async () => jest.fn()}
        className='myClassName'
      />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
