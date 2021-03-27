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

  try {
    const signInResponse = await fetch(urls.auth.signIn, settings);
    const data = await signInResponse.json();

    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    return error;
  }
};

export { signIn };
