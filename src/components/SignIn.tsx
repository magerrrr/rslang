import * as React from 'react';
import useSignInForm from '../hooks/useSignInForm';
import styled from 'styled-components';
import { Button, withStyles } from '@material-ui/core';

export const SignIn: React.FC = () => {
  const {
    placeholders,
    names,
    values,
    handleChange,
    handleBlur,
    isPasswordError,
    isEmailError,
    isFormDisabled,
    errors,
    submitForm,
  } = useSignInForm();

  return (
    <Wrapper>
      <h1>Войти</h1>
      <FormContainer>
        <StyledForm onSubmit={submitForm}>
          <StyledLabel>
            <StyledInput
              type="text"
              placeholder={placeholders.email}
              name={names.email}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              isError={isEmailError}
            />
          </StyledLabel>
          {isEmailError && <StyledError>{errors.email}</StyledError>}
          <StyledLabel>
            <StyledInput
              type="password"
              placeholder={placeholders.password}
              name={names.password}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              isError={isPasswordError}
            />
          </StyledLabel>
          {isPasswordError && <StyledError>{errors.password}</StyledError>}

          <SignInButton type="submit" disabled={isFormDisabled}>
            Войти
          </SignInButton>
          {errors.serverResponseError && (
            <StyledServerErrorContainer>
              <StyledError>{errors.serverResponseError}</StyledError>
            </StyledServerErrorContainer>
          )}
        </StyledForm>
      </FormContainer>
    </Wrapper>
  );
};

type InputPropsType = { isError?: boolean };

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
  margin: 0;
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: ${({ isError }: InputPropsType) => `1px solid ${isError ? '#EC407A' : '#c1b3f1'}`};
  margin-bottom: ${({ isError }: InputPropsType) => (isError ? '4px' : '22px')};
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  animation: ${({ isError }: InputPropsType) => (isError ? 'wiggle 0.3s linear 1 normal' : 'none')};

  @keyframes wiggle {
    0% {
      top: 0;
      left: 0;
      transform: rotate(0deg);
    }
    25% {
      top: 1px;
      left: 2px;
      transform: rotate(-2deg);
    }
    50% {
      top: 2px;
      left: 0;
      transform: rotate(0deg);
    }
    75% {
      top: 1px;
      left: -2px;
      transform: rotate(2deg);
    }
    100% {
      top: 0;
      left: 0;
      transform: rotate(0deg);
    }
  }
`;

const StyledError = styled.strong`
  display: flex;
  color: #ec407a;
  min-height: 18px;
  font-size: 12px;
  margin-left: 5px;
`;

const StyledServerErrorContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const SignInButton = withStyles({
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
    transition: 'all 0.4s',

    '&:disabled': {
      background: 'linear-gradient(45deg, #d4cfe4 30%, #d0c6f1 90%)',
      boxShadow: 'none',
      color: '#807575',
    },
  },
  label: {
    textTransform: 'uppercase',
  },
})(Button);
