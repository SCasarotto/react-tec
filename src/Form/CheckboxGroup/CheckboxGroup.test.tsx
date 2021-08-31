import React from 'react';

import { render } from '@testing-library/react';

import { CheckboxGroup } from './CheckboxGroup';

describe('CheckboxGroup', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <CheckboxGroup
        labelForKey='testCheckboxGroup'
        onChange={jest.fn()}
        buttonArray={['someValue', 'AnotherValue']}
        checkedValues={['someValue']}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <CheckboxGroup
        className='myClassName'
        labelForKey='testCheckboxGroup'
        onChange={jest.fn()}
        buttonArray={['someValue', 'AnotherValue']}
        checkedValues={['someValue']}
      />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
