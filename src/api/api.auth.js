import urls from './urls';

const signIn = async (userData) => {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  };

  const signInResponse = await fetch(urls.auth.signIn, settings);

  if ([403, 404].includes(signInResponse.status)) {
    throw new Error('Некорректный е-мейл или пароль');
  }

  const data = await signInResponse.json();
  localStorage.setItem('token', data.token);
  localStorage.setItem('refreshToken', data.refreshToken);
  localStorage.setItem('userId', data.userId);
  localStorage.setItem('name', data.name);
  return data;
};

export { signIn };
