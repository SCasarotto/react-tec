import React from 'react';

import { render } from '@testing-library/react';

import { AppWrapper } from '../../Globals/AppWrapper';
import { mockOnScroll } from '../../helpers/testHelpers';
import { PrivateRoute } from './PrivateRoute';

describe('PrivateRoute', () => {
  mockOnScroll();
  it('matches snapshot', () => {
    const { asFragment } = render(
      <AppWrapper>
        <PrivateRoute />
      </AppWrapper>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
