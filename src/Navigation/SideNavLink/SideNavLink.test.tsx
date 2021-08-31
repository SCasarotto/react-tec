import React from 'react';

import { render } from '@testing-library/react';

import { AppWrapper } from '../../Globals/AppWrapper';
import { mockOnScroll } from '../../helpers/testHelpers';
import { SideNavLink } from './SideNavLink';

describe('SideNavLink', () => {
  mockOnScroll();
  it('matches snapshot', () => {
    const { asFragment } = render(
      <AppWrapper>
        <SideNavLink title='MyTitle' to='/SomeURL' />
      </AppWrapper>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <AppWrapper>
        <SideNavLink title='MyTitle' to='/SomeURL' className='myClassName' />
      </AppWrapper>,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
