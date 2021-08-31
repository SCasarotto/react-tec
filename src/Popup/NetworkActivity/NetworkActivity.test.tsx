import React from 'react';

import { render } from '@testing-library/react';

import { NetworkActivity } from './NetworkActivity';

describe('NetworkActivity', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<NetworkActivity visible />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <NetworkActivity visible className='myClassName' />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
