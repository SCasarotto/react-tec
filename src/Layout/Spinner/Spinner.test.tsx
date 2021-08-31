import React from 'react';

import { render } from '@testing-library/react';

import { Spinner } from './Spinner';

describe('Spinner', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<Spinner className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
