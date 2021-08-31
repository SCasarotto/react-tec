import React from 'react';

import { render } from '@testing-library/react';

import { SideNavbar } from './SideNavbar';

describe('SideNavbar', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<SideNavbar />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(<SideNavbar className='myClassName' />);
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
