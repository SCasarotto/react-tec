import React from 'react';

import { render } from '@testing-library/react';

import { AppWrapper } from '../../Globals/AppWrapper';
import { mockOnScroll } from '../../helpers/testHelpers';
import { MenuButton } from './MenuButton';

describe('MenuButton', () => {
  mockOnScroll();
  it('matches snapshot', () => {
    const { asFragment } = render(
      <AppWrapper>
        <MenuButton title='My Menu Button'>
          {({ hideMenu }) => (
            <div>
              <button
                onClick={() => {
                  alert('Press!1');
                  hideMenu();
                }}
              >
                My Button1
              </button>
              <button
                onClick={() => {
                  alert('Press!2');
                  hideMenu();
                }}
              >
                My Button2
              </button>
              <button
                onClick={() => {
                  alert('Press!3');
                  hideMenu();
                }}
              >
                My Button3
              </button>
            </div>
          )}
        </MenuButton>
      </AppWrapper>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // Class Name
  it('accepts custom className', () => {
    const { container } = render(
      <AppWrapper>
        <MenuButton title='mydropdown' className='myClassName'>
          {({ hideMenu }) => (
            <div>
              <button
                onClick={() => {
                  alert('Press!1');
                  hideMenu();
                }}
              >
                My Button1
              </button>
              <button
                onClick={() => {
                  alert('Press!2');
                  hideMenu();
                }}
              >
                My Button2
              </button>
              <button
                onClick={() => {
                  alert('Press!3');
                  hideMenu();
                }}
              >
                My Button3
              </button>
            </div>
          )}
        </MenuButton>
      </AppWrapper>,
    );
    expect(container.firstChild).toHaveClass('myClassName');
  });
});
