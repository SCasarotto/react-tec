import React from 'react';

import { render, waitFor } from '@testing-library/react';
import PNInput from 'react-phone-number-input';

import { PhoneNumberInput } from './PhoneNumberInput';

describe('PhoneNumberInput', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <PhoneNumberInput onChange={jest.fn()} value='' />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <PhoneNumberInput
        onChange={jest.fn()}
        value=''
        className='myClassName'
      />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });
  // Ref
  it('renders with ref', async () => {
    const ref: { current: PNInput | null } = { current: null };
    render(<PhoneNumberInput onChange={jest.fn()} value='' ref={ref} />);
    waitFor(() => expect(ref.current).toBeTruthy());
  });
});
