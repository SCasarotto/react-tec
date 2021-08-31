import React from 'react';

import { render } from '@testing-library/react';

import { PopupProvider } from './PopupContext';

describe('PopupContext', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<PopupProvider />);
    expect(asFragment()).toMatchSnapshot();
  });
});
