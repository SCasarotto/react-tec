import React from 'react';

import { render } from '@testing-library/react';

import { ErrorLoadingAlert } from './ErrorLoadingAlert';

describe('ErrorLoadingAlert', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<ErrorLoadingAlert />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<ErrorLoadingAlert className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
