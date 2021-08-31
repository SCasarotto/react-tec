import React from 'react';

import { render } from '@testing-library/react';

import { TitleBar } from './TitleBar';

describe('TitleBar', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<TitleBar />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<TitleBar className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
