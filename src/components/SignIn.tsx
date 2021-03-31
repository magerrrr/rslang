import * as React from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api';
type Props = {};

export const SignIn = (props: Props) => {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = async () => {
    try {
      await api.auth.signIn({ email, password });
      history.push('/');
    } catch (e) {
      return e;
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <label>
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button onClick={handleSignIn}>Sign In</button>
    </>
  );
};
