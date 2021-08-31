import React from 'react';

import { render, waitFor } from '@testing-library/react';
import DatePicker from 'react-datepicker';

import { DatetimeInput } from './DatetimeInput';

describe('DatetimeInput', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(<DatetimeInput onChange={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <DatetimeInput className='myClassName' onChange={jest.fn()} />,
    );
    expect(container.querySelector('.myClassName')).toBeTruthy();
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: DatePicker | null } = { current: null };
    render(<DatetimeInput onChange={jest.fn()} ref={ref} />);
    waitFor(() => expect(ref.current).toBeTruthy());
  });
});
