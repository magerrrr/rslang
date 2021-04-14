import * as React from 'react';
import api from '../api';
import { useHistory } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components';
import { Button, withStyles } from '@material-ui/core';

type Props = {};

interface ISignUpData {
  name: string;
  email: string;
  password: string;
}

const initialSignUpData = {
  name: '',
  email: '',
  password: '',
};

export const SignUp = (props: Props) => {
  const [signUpData, setSignUpData] = React.useState<ISignUpData>(initialSignUpData);
  const [avatar, setAvatar] = React.useState<any>(null);
  const history = useHistory();

  const handleSubmitSignUp = async (e: any) => {
    const formData = new FormData();
    formData.append('name', signUpData.name);
    formData.append('email', signUpData.email);
    formData.append('password', signUpData.password);
    formData.append('avatar', avatar, avatar.name);

    await api.users.createNewUser(formData);
    history.push('/');
  };

  const inputChangeHandler = (e: any) => {
    setSignUpData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onDrop = (picture: any) => {
    setAvatar(picture[0]);
  };

  return (
    <Wrapper>
      <h1>Регистрация</h1>
      <FormContainer>
        <StyledForm autoComplete="off">
          <StyledLabel>
            <StyledInput
              type="text"
              name="name"
              placeholder="Имя"
              value={signUpData.name}
              onChange={inputChangeHandler}
            />
          </StyledLabel>

          <StyledLabel>
            <StyledInput
              type="text"
              name="email"
              placeholder="Е-мейл"
              value={signUpData.email}
              onChange={inputChangeHandler}
            />
          </StyledLabel>

          <StyledLabel>
            <StyledInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={signUpData.password}
              onChange={inputChangeHandler}
            />
          </StyledLabel>

          {avatar ? (
            <ImageSelected>
              <span>Аватар выбран</span>
              <DeleteButton onClick={() => setAvatar(null)}>Удалить</DeleteButton>
            </ImageSelected>
          ) : (
            <ImageUploader
              onChange={onDrop}
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

          <StyledButton disabled onClick={handleSubmitSignUp}>
            Регистрация
          </StyledButton>
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
  },
  label: {
    textTransform: 'uppercase',
  },
})(Button);
