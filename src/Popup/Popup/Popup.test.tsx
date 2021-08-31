import React from 'react';

import { render } from '@testing-library/react';

import { Popup } from './Popup';

describe('Popup', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<Popup visible />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<Popup visible className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
