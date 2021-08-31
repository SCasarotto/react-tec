import React from 'react';

import { render, waitFor } from '@testing-library/react';
import Select from 'react-select';

import { ThemeProvider } from '../../Globals/ThemeContext';
import { SelectRow } from './SelectRow';

describe('SelectRow', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <SelectRow labelForKey='testSelectRow' />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <ThemeProvider>
        <SelectRow className='myClassName' />
      </ThemeProvider>,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: Select | null } = { current: null };
    const { container } = render(
      <ThemeProvider>
        <SelectRow ref={ref} id='myInputId' />
      </ThemeProvider>,
    );
    const searchSelect = container.querySelector("input[type='text']");
    await waitFor(() => expect(searchSelect).not.toHaveFocus());
    ref.current?.focus();
    await waitFor(() => expect(searchSelect).toHaveFocus());
  });
});
