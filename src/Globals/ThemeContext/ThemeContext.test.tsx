import React from 'react';

import { render } from '@testing-library/react';

import { ThemeProvider } from './ThemeContext';

describe('ThemeContext', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<ThemeProvider />);
    expect(asFragment()).toMatchSnapshot();
  });
});
