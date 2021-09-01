import React from 'react';

import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';

interface PrivateRouteAuthCheck {
  check(props: RouteComponentProps<any>): boolean;
  path: string;
}
export interface PrivateRouteProps extends RouteProps {
  authChecks?: Array<PrivateRouteAuthCheck>;
}
/**
 *
 * `PrivateRoute` provides an easy way to redirect a user if they are not signed in or don't have the appropriate user permissions.
 *
 * In addition to the props below, review the props of a `Route` from [react-router](https://reacttraining.com/react-router/web/api/Route).
 *
 * You will want to be careful when using a `path='/'` or some other path that also matches to `authPath` or `accessDeniedPath` without `exact=true` because it will result in an infinate loop.
 *
 */
export const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { authChecks, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (authChecks) {
          for (let i = 0; i < authChecks.length; i++) {
            const { check, path } = authChecks[i];
            if (!check(props)) {
              return (
                <Redirect
                  to={{
                    pathname: path,
                    state: { fromPath: rest.path },
                  }}
                />
              );
            }
          }
        }

        return Component ? <Component {...props} /> : <Route {...rest} />;
      }}
    />
  );
};
