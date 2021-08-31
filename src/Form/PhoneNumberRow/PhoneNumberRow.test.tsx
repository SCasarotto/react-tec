import React from 'react';

import { render, waitFor } from '@testing-library/react';
import PhoneNumberInput from 'react-phone-number-input';

import { PhoneNumberRow } from './PhoneNumberRow';

describe('PhoneNumberRow', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <PhoneNumberRow
        labelForKey='testPhoneNumberRow'
        onChange={jest.fn()}
        value=''
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <PhoneNumberRow
        labelForKey='testPhoneNumberRow'
        onChange={jest.fn()}
        value=''
        className='myClassName'
      />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });
  // Ref
  it('renders with ref', async () => {
    const ref: { current: PhoneNumberInput | null } = { current: null };
    render(
      <PhoneNumberRow
        labelForKey='testPhoneNumberRow'
        onChange={jest.fn()}
        value=''
        ref={ref}
      />,
    );
    waitFor(() => expect(ref.current).toBeTruthy());
  });
});
