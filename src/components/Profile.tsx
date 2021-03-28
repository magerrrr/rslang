import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../shared/constants';
import { baseURL } from '../api/urls';
import useGetCurrentUserId from '../hooks/useGetCurrentUserId';
import api from '../api';

type Props = {};

export const Profile = (props: Props) => {
  const history = useHistory();
  const currentUserId = useGetCurrentUserId();
  const { user } = api.users.getUser(currentUserId);

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
      {user && (
        <>
          {user.avatar && <img src={`${baseURL}/${user.avatar}`} alt="Avatar" />}
          <p>
            <span>Имя:</span>
            <span>{user.name}</span>
          </p>
          <p>
            <span>Email:</span>
            <span>{user.email}</span>
          </p>
          <p>
            <span>Id пользователя:</span>
            <span>{user.id}</span>
          </p>
        </>
      )}
      <button onClick={handleSignOut}>Выйти из профиля</button>
    </>
  );
};
