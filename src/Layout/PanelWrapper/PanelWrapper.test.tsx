import React from 'react';

import { render } from '@testing-library/react';

import { PanelWrapper } from './PanelWrapper';

describe('PanelWrapper', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<PanelWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<PanelWrapper className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
