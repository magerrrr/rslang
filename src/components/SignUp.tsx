import * as React from 'react';
import api from '../api';
import { useHistory } from 'react-router-dom';

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
    e.preventDefault();

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

  const onFileChange = (event: any) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  return (
    <>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmitSignUp} autoComplete="off">
        <label>
          <p>Имя</p>
          <input type="text" name="name" value={signUpData.name} onChange={inputChangeHandler} />
        </label>

        <label>
          <p>E-mail:</p>
          <input type="text" name="email" value={signUpData.email} onChange={inputChangeHandler} />
        </label>

        <label>
          <p>Пароль:</p>
          <input
            type="text"
            name="password"
            value={signUpData.password}
            onChange={inputChangeHandler}
          />
        </label>

        <label>
          <p>Аватар:</p>
          <input type="file" onChange={onFileChange} />
        </label>
        <p>
          <input type="submit" value="Sign Up" />
        </p>
      </form>
    </>
  );
};
