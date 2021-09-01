import React from 'react';

import { render, waitFor } from '@testing-library/react';
import DatePicker from 'react-datepicker';

import { DatetimeRow } from './DatetimeRow';

describe('DatetimeRow', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <DatetimeRow labelForKey='myDatetimeRow' onChange={jest.fn()} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <DatetimeRow
        className='myClassName'
        labelForKey='myDatetimeRow'
        onChange={jest.fn()}
      />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: DatePicker<any> | null } = { current: null };
    render(
      <DatetimeRow
        labelForKey='myDatetimeRow'
        onChange={jest.fn()}
        ref={ref}
      />,
    );
    waitFor(() => expect(ref.current).toBeTruthy());
  });
});
