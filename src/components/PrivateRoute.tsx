import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ROUTES } from '../shared/constants';
import useCheckAuthenticate from '../hooks/useCheckAuthenticate';

type Props = {
  path: string;
  component: React.FC<any>;
  exact?: boolean;
};

export const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useCheckAuthenticate();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        }
        if (!isAuthenticated) {
          return <Redirect to={{ pathname: ROUTES.MAIN.route, state: { from: props.location } }} />;
        }
      }}
    />
  );
};
