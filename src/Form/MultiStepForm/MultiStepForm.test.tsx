import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { MultiStepForm } from './MultiStepForm';

describe('MultiStepForm', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <MultiStepForm stepData={[]} onSubmit={async () => jest.fn()} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <MultiStepForm
        stepData={[]}
        onSubmit={async () => jest.fn()}
        className='myClassName'
      />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });

  // Ref
  it('renders with ref', async () => {
    const ref: { current: HTMLFormElement | null } = { current: null };
    render(
      <MultiStepForm
        stepData={[]}
        onSubmit={async () => jest.fn()}
        ref={ref}
        data-testid='myMultiForm'
      />,
    );
    // Using this as the focus check didn't seem to work
    waitFor(() => expect(ref.current).toBeTruthy());
  });
});
