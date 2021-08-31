import React from 'react';

import { render } from '@testing-library/react';

import { Panel } from './Panel';

describe('Panel', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<Panel />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<Panel className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
