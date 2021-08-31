import React from 'react';

import { render } from '@testing-library/react';

import { Alert } from './Alert';

describe('Alert', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<Alert visible />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<Alert visible className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
