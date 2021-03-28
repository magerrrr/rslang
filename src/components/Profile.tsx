import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../shared/constants';

type Props = {};

export const Profile = (props: Props) => {
  const history = useHistory();
  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
    history.push(ROUTES.MAIN.route);
  };

  return (
    <>
      <h1>Profile</h1>
      <button onClick={handleSignOut}>Выйти из профиля</button>
    </>
  );
};
