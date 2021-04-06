import * as React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { ROUTES } from '../shared/constants';

import api from '../api';
import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledLink,
} from './SignCommon';

type Props = {};

export const SignIn = (props: Props) => {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { SIGN_UP } = ROUTES;

  const handleSignIn = async () => {
    try {
      await api.auth.signIn({ email, password });
      history.push('/');
    } catch (e) {
      return e;
    }
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormContainer>
        <StyledForm autoComplete="off">
          <StyledInput 
              type='text' 
              value={email} 
              onChange={(event) => setEmail(event.target.value)}
              placeholder='Email'
          />
          <StyledInput
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder='Password'
          />
          <StyledButton onClick={handleSignIn}>Войти</StyledButton>
          <>
            <StyledLink
                component={RouterLink}
                to={SIGN_UP.route}
                color="primary"
                variant="body1"
                style={{ textDecoration: 'none' }}
            >Зарегистрироваться</StyledLink>
          </>
        </StyledForm>
      </FormContainer>
    </div>
  );
};
