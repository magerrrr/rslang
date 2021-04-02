import * as React from 'react';
import api from '../api';
import { useHistory } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledButton,
} from './SignCommon';

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
          <label>
            <StyledInput
              type="text"
              name="name"
              placeholder="Имя"
              value={signUpData.name}
              onChange={inputChangeHandler}
            />
          </label>

          <label>
            <StyledInput
              type="text"
              name="email"
              placeholder="E-mail"
              value={signUpData.email}
              onChange={inputChangeHandler}
            />
          </label>

          <label>
            <StyledInput
              type="password"
              name="password"
              placeholder="Password"
              value={signUpData.password}
              onChange={inputChangeHandler}
            />
          </label>

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

          <StyledButton onClick={handleSubmitSignUp}>Регистрация</StyledButton>
        </StyledForm>
      </FormContainer>
    </div>
  );
};
