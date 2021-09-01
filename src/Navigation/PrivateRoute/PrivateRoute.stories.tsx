import React, { useState } from 'react';

import { Meta } from '@storybook/react';
import { Link, Route, Switch } from 'react-router-dom';

import { Button } from '../../Form/Button';
import { PrivateRoute } from './PrivateRoute';

export default {
  title: 'Navigation/PrivateRoute',
  component: PrivateRoute,
  argTypes: {},
} as Meta;

const Base = () => <p>Base Route</p>;
const Authenticated = () => <p>Authenticated Route</p>;
const AuthenticatedAdmin = () => <p>AuthenticatedAdmin Route</p>;
const AuthenticatedAdminDynamicData = (props: any) => (
  <p>AuthenticatedAdmin Route - data: {props.match.params.someData}</p>
);
const AuthenticatedFailed = () => <p>AuthenticatedFailed Route</p>;
const AuthenticatedAdminFailed = () => <p>AuthenticatedAdminFailed Route</p>;
const NotFound = () => <p>NotFound Route</p>;

export const Default = () => {
  const [auth, setAuth] = useState(false);
  const [authAdmin, setAuthAdmin] = useState(false);

  return (
    <>
      <ul>
        <li>
          <Link to='/PrivateRouteExample'>Base</Link>
        </li>
        <li>
          <Link to='/PrivateRouteExample/authenticated'>Authenticated</Link>
        </li>
        <li>
          <Link to='/PrivateRouteExample/authenticatedAdmin'>
            AuthenticatedAdmin
          </Link>
        </li>
        <li>
          <Link to='/PrivateRouteExample/authenticatedAdmin/someDynamicData'>
            AuthenticatedAdmin & someDynamicData
          </Link>
        </li>
      </ul>
      <Button onClick={() => setAuth(!auth)}>
        Toggle Authenticated To {auth ? 'False' : 'True'}
      </Button>
      <Button onClick={() => setAuthAdmin(!authAdmin)}>
        Toggle AuthenticatedAdmin To {authAdmin ? 'False' : 'True'}
      </Button>
      <Switch>
        <Route path='/PrivateRouteExample/' component={Base} exact />
        <PrivateRoute
          path='/PrivateRouteExample/authenticated'
          component={Authenticated}
          authChecks={[
            { check: () => auth, path: '/PrivateRouteExample/sign-in' },
          ]}
        />
        <PrivateRoute
          path='/PrivateRouteExample/authenticatedAdmin/:someData'
          component={AuthenticatedAdminDynamicData}
          authChecks={[
            { check: () => auth, path: '/PrivateRouteExample/sign-in' },
            {
              check: (props) =>
                authAdmin && props.match.params.someData === 'someDynamicData',
              path: '/PrivateRouteExample/403',
            },
          ]}
        />
        <PrivateRoute
          path='/PrivateRouteExample/authenticatedAdmin'
          component={AuthenticatedAdmin}
          authChecks={[
            { check: () => auth, path: '/PrivateRouteExample/sign-in' },
            {
              check: () => authAdmin,
              path: '/PrivateRouteExample/403',
            },
          ]}
        />
        <Route
          path='/PrivateRouteExample/sign-in'
          component={AuthenticatedFailed}
        />
        <Route
          path='/PrivateRouteExample/403'
          component={AuthenticatedAdminFailed}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
