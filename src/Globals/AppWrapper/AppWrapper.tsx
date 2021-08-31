import React from 'react';

import { Manager } from 'react-popper';
import { BrowserRouter, useLocation } from 'react-router-dom';

import { useScrollTop } from '../../Utility/useScrollTop';
import { PopupProvider } from '../PopupContext';
import { ThemeProvider, ThemeProviderProps } from '../ThemeContext';

export interface AppWrapperProps extends ThemeProviderProps {}
const AppWrapperContent: React.FC<AppWrapperProps> = (props) => {
  const { theme, globalStyles, children } = props;
  const location = useLocation();
  useScrollTop(location);

  return (
    <ThemeProvider theme={theme} globalStyles={globalStyles}>
      <PopupProvider>
        <Manager>{children}</Manager>
      </PopupProvider>
    </ThemeProvider>
  );
};

/**
 *
 * AppWrapper is meant to be the single top level wrapping element you need. Having said that, it does contain a number of things. `AppWrapper` contain the following:
 *
 * ```
 * <BrowserRouter>
 * 	<ScrollToTop>
 * 		<ThemeProvider theme={theme} globalStyles={globalStyles}>
 *			<PopupProvider>{children}</PopupProvider>
 *		</ThemeProvider>
 * 	</ScrollToTop>
 * </BrowserRouter>
 * ```
 *
 * Here `BrowserRouter` comes from [react-router-dom](https://reacttraining.com/react-router/web/api/BrowserRouter). For all other components, please view thier given documentation page.
 *
 * As for props, the only props `AppWrapper` accepts are those that `ThemeProvider` accepts.
 *
 * `AppWrapper` is implemented like the following in this project:
 *
 * ```
 * const Main = () => (
 * 	<AppWrapper globalStyles={globalStyles}>
 *		<App />
 * 	</AppWrapper>
 * )
 * ReactDOM.render(<Main />, document.getElementById('root'))
 * ```
 *
 */
export const AppWrapper: React.FC<AppWrapperProps> = (props) => {
  return (
    <BrowserRouter>
      <AppWrapperContent {...props} />
    </BrowserRouter>
  );
};
