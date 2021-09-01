import React from 'react';

import { render, waitFor } from '@testing-library/react';
import RSelect from 'react-select';

import { ThemeProvider } from '../../Globals/ThemeContext';
import { Select } from './Select';

describe('Select', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Select />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <ThemeProvider>
        <Select className='myClassName' />
      </ThemeProvider>,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: RSelect | null } = { current: null };
    const { container } = render(
      <ThemeProvider>
        <Select ref={ref} id='myInputId' />
      </ThemeProvider>,
    );
    const searchSelect = container.querySelector("input[type='text']");
    await waitFor(() => expect(searchSelect).not.toHaveFocus());
    ref.current?.focus();
    await waitFor(() => expect(searchSelect).toHaveFocus());
  });
});
