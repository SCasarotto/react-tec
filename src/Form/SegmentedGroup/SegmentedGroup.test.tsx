import React from 'react';

import { render } from '@testing-library/react';

import { SegmentedGroup } from './SegmentedGroup';

describe('SegmentedGroup', () => {
  // Renders Without Error
  it('matches snapshot', () => {
    const { asFragment } = render(
      <SegmentedGroup
        labelForKey='testSegmentedGroup'
        checkedValue='someValue'
        buttonArray={['someValue', 'anotherValue']}
        onChange={jest.fn()}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <SegmentedGroup
        labelForKey='testSegmentedGroup'
        checkedValue='someValue'
        buttonArray={['someValue', 'anotherValue']}
        onChange={jest.fn()}
        className='myClassName'
      />,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
