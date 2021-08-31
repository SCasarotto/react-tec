import React from 'react';

import { render } from '@testing-library/react';

import { BodyContainer } from './BodyContainer';

describe('BodyContainer', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<BodyContainer />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<BodyContainer className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
