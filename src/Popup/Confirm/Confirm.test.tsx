import React from 'react';

import { render } from '@testing-library/react';

import { Confirm } from './Confirm';

describe('Confirm', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<Confirm visible />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<Confirm visible className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
