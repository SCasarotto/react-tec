import React from 'react';

import { render } from '@testing-library/react';

import { RadioButtonGroup } from './RadioButtonGroup';

describe('RadioButtonGroup', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <RadioButtonGroup
        labelForKey='testRadioButtonGroup'
        checkedValue='someValue'
        buttonArray={['someValue', 'otherValue']}
        onChange={jest.fn()}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <RadioButtonGroup
        labelForKey='testRadioButtonGroup'
        checkedValue='someValue'
        buttonArray={['someValue', 'otherValue']}
        onChange={jest.fn()}
        className='myClassName'
      />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
