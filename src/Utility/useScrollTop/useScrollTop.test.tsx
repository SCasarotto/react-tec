import React from 'react';

import ReactDOM from 'react-dom';
import { useLocation } from 'react-router';

import { AppWrapper } from '../../Globals/AppWrapper';
import { mockOnScroll } from '../../helpers/testHelpers';
import { useScrollTop } from './useScrollTop';

const ScrollTopComponent: React.FC = () => {
  const location = useLocation();
  useScrollTop(location);
  return null;
};

describe('useScrollTop', () => {
  mockOnScroll();
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <AppWrapper>
        <ScrollTopComponent />
      </AppWrapper>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
