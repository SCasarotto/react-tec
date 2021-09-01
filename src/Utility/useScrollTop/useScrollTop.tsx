import { useEffect } from 'react';

import { RouteComponentProps } from 'react-router-dom';

/**
 *
 * useScrollTopSection is just a simple hook. Look at the source code. When the react router location changes the page scrolls back to the top. This is important because if the user has scrolled down and then navigates to a new page, they could be placed in the middle of the new page which is not expected.
 *
 */
export const useScrollTop = (location: RouteComponentProps['location']) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};
