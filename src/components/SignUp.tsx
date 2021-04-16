import * as React from 'react';
import useSignUpForm from '../hooks/useSignUpForm';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components';
import { Button, withStyles } from '@material-ui/core';

type InputPropsType = { isError?: boolean };

export const SignUp: React.FC = () => {
  const {
    placeholders,
    names,
    values,
    handleChange,
    handleBlur,
    handleDrop,
    setFieldAvatarToDefault,
    isPasswordError,
    isEmailError,
    isNameError,
    isAbleToSubmit,
    errors,
    submitForm,
  } = useSignUpForm();

  return (
    <Wrapper>
      <h1>Регистрация</h1>
      <FormContainer>
        <StyledForm autoComplete="off" onSubmit={submitForm}>
          <StyledLabel>
            <StyledInput
              type="text"
              placeholder={placeholders.name}
              name={names.name}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              isError={isNameError}
            />
          </StyledLabel>
          {isNameError && <StyledError>{errors.name}</StyledError>}

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

          {values.avatar ? (
            <ImageSelected>
              <span>Аватар выбран</span>
              <DeleteButton onClick={setFieldAvatarToDefault}>Удалить</DeleteButton>
            </ImageSelected>
          ) : (
            <ImageUploader
              onChange={handleDrop}
              withIcon={true}
              singleImage={true}
              label="Максимальный размер фото 4мб"
              buttonText="Загрузите Ваше фото"
              imgExtension={['.jpg', '.png']}
              maxFileSize={4194304}
              fileSizeError="Размер фотографии слишком большой"
              fileTypeError="Этот формат не поддерживается"
              buttonStyles={{ background: '#9a8fb8' }}
            />
          )}

          <StyledButton type="submit" disabled={!isAbleToSubmit}>
            Регистрация
          </StyledButton>

          {errors.serverResponseError && (
            <StyledServerErrorContainer>
              <StyledServerError>{errors.serverResponseError}</StyledServerError>
            </StyledServerErrorContainer>
          )}
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

const ImageSelected = styled.div`
  height: 173px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 5%);
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

const StyledServerError = styled.strong`
  display: flex;
  color: #ec407a;
  min-height: 18px;
  font-size: 12px;
  margin-left: 5px;
  text-align: center;
`;

const StyledServerErrorContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const DeleteButton = withStyles({
  root: {
    background: 'linear-gradient(45deg,  #bd1646 30%, #dc2b2b 90%)',
    boxShadow: '0 3px 5px 2px rgb(136 121 148 / 30%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 24,
  },
  label: {
    textTransform: 'uppercase',
  },
})(Button);

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
