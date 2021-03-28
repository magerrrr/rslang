import * as React from 'react';

type Props = {};

export const Profile = (props: Props) => {
  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
  };

  return (
    <>
      <h1>Profile</h1>
      <button onClick={handleSignOut}>Выйти из профиля</button>
    </>
  );
};
