import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import api from '../api';

type InitialValuesType = {
  name: string;
  email: string;
  password: string;
  avatar: any;
};

const signUpValidationSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, 'Длина имени не может быть больше 50 символов')
    .required('Обязательное поле'),
  email: yup
    .string()
    .email('Некорректный адрес электронной почты')
    .max(50, 'Длина адреса электронной почты не может быть больше 50 символов')
    .required('Обязательное поле'),
  password: yup
    .string()
    .min(8, 'Длина пароля должна быть больше 8 символов')
    .required('Обязательное поле'),
});

const placeholders = {
  name: 'Имя',
  email: 'Е-мейл',
  password: 'Пароль',
};

const names = {
  name: 'name',
  email: 'email',
  password: 'password',
  avatar: 'avatar',
};

const initialValues: InitialValuesType = {
  name: '',
  email: '',
  password: '',
  avatar: null,
};

const useSignUpForm = () => {
  const history = useHistory();
  const [serverResponseError, setServerResponseError] = React.useState('');

  const formik = useFormik({
    initialValues,
    validationSchema: signUpValidationSchema,
    validateOnBlur: false,
    onSubmit: async ({ name, email, password }) => {
      try {
        if (!name.trim()) {
          setFieldError(names.name, 'Поле содержит пробелы');
          return;
        }
        if (!email || !password) {
          return;
        }
        setServerResponseError('');

        const signUpFormData = new FormData();
        signUpFormData.append('name', values.name);
        signUpFormData.append('email', values.email);
        signUpFormData.append('password', values.password);
        values.avatar && signUpFormData.append('avatar', values.avatar, values.avatar.name);

        await api.users.createNewUser(signUpFormData);
        await api.auth.signIn({ email, password });
        history.push('/');
      } catch (error) {
        setServerResponseError(String(error.message));
      }
    },
  });

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    errors,
    touched,
    isValid,
    dirty,
    setFieldValue,
    setFieldError,
  } = formik;

  const handleDrop = (picture: any) => {
    setFieldValue(names.avatar, picture[0]);
  };

  const isNameError = Boolean(touched.name && errors.name);
  const isEmailError = Boolean(touched.email && errors.email);
  const isPasswordError = Boolean(touched.password && errors.password);
  const isAbleToSubmit = Boolean(dirty && isValid);
  const setFieldAvatarToDefault = () => setFieldValue(names.avatar, null);

  return {
    placeholders,
    names,
    isNameError,
    isEmailError,
    isPasswordError,
    isAbleToSubmit,
    values,
    handleChange,
    handleBlur,
    resetForm,
    errors: { ...errors, serverResponseError },
    submitForm: handleSubmit,
    handleDrop,
    setFieldAvatarToDefault,
  };
};

export default useSignUpForm;
