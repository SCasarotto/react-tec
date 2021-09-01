import React from 'react';

import { render } from '@testing-library/react';

import { mockOnScroll } from '../../helpers/testHelpers';
import { AppWrapper } from './AppWrapper';

describe('AppWrapper', () => {
  mockOnScroll();
  it('matches snapshot', () => {
    const { asFragment } = render(<AppWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });
});
