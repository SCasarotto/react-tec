import React from 'react';

import { render } from '@testing-library/react';

import { PanelTitle } from './PanelTitle';

describe('PanelTitle', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<PanelTitle />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<PanelTitle className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
