import * as React from 'react';
import { useHistory } from 'react-router-dom';

import api from '../api';

import styled from 'styled-components';
import { Button, withStyles } from '@material-ui/core';
type Props = {};

export const SignIn = (props: Props) => {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event: any) => setEmail(event.target.value);

  const handlePasswordChange = (event: any) => setPassword(event.target.value);

  const handleSignIn = async () => {
    try {
      await api.auth.signIn({ email, password });
      history.push('/');
    } catch (e) {
      return e;
    }
  };

  return (
    <Wrapper>
      <h1>Войти</h1>
      <FormContainer>
        <StyledForm>
          <StyledLabel>
            <StyledInput
              type="text"
              name="email"
              placeholder="Е-мейл"
              value={email}
              onChange={handleEmailChange}
            />
          </StyledLabel>

          <StyledLabel>
            <StyledInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={handlePasswordChange}
            />
          </StyledLabel>

          <StyledButton onClick={handleSignIn}>Войти</StyledButton>
        </StyledForm>
      </FormContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 300px;
  background-color: #f4f3fa;
  padding: 30px;
  margin-top: 30px;
  border-radius: 20px;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledLabel = styled.label`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: 1px solid #c1b3f1;
  border-radius: 5px;
  margin-bottom: 20px;

  &:focus {
    outline-color: #a196ca;
  }
`;

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #9a8fb8 30%, #c1b3f1 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 36,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgb(136 121 148 / 30%)',
    width: '100%',
    marginTop: 10,
  },
  label: {
    textTransform: 'uppercase',
  },
})(Button);
