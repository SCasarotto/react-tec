import React from 'react';

import { render } from '@testing-library/react';

import { AppWrapper } from '../../Globals/AppWrapper';
import { mockOnScroll } from '../../helpers/testHelpers';
import { SubNavbar } from './SubNavbar';

describe('SubNavbar', () => {
  mockOnScroll();
  it('matches snapshot', () => {
    const { asFragment } = render(
      <AppWrapper>
        <SubNavbar links={[]} />
      </AppWrapper>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <AppWrapper>
        <SubNavbar links={[]} className='myClassName' />
      </AppWrapper>,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
