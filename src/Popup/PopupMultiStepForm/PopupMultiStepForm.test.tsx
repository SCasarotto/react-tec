import React from 'react';

import { render, waitFor } from '@testing-library/react';

import { PopupMultiStepForm } from './PopupMultiStepForm';

describe('PopupMultiStepForm', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <PopupMultiStepForm
        visible
        stepData={[]}
        onClose={jest.fn()}
        onSubmit={async () => jest.fn()}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <PopupMultiStepForm
        visible
        stepData={[]}
        onClose={jest.fn()}
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
      <PopupMultiStepForm
        visible
        stepData={[]}
        onClose={jest.fn()}
        onSubmit={async () => jest.fn()}
        ref={ref}
        data-testid='myFormId'
      />,
    );
    // Using this as the focus check didn't seem to work
    waitFor(() => expect(ref.current).toBeTruthy());
  });
});
