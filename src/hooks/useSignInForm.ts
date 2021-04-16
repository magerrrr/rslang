import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import api from '../api';

type InitialValuesType = {
  email: string;
  password: string;
};

const signInValidationSchema = yup.object().shape({
  email: yup.string().email('Некорректный адрес электронной почты').required('Обязательное поле'),
  password: yup
    .string()
    .min(8, 'Длина пароля должна быть больше 8 символов')
    .required('Обязательное поле'),
});

const placeholders = {
  email: 'Е-мейл',
  password: 'Пароль',
};

const names = {
  email: 'email',
  password: 'password',
};

const initialValues: InitialValuesType = {
  email: '',
  password: '',
};

const useSignInForm = () => {
  const history = useHistory();
  const [serverResponseError, setServerResponseError] = React.useState('');

  const formik = useFormik({
    initialValues,
    validationSchema: signInValidationSchema,
    validateOnBlur: false,
    onSubmit: async (values) => {
      try {
        if (!values.email || !values.password) {
          return;
        }
        setServerResponseError('');
        await api.auth.signIn(values);
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
  } = formik;

  const isEmailError = Boolean(touched.email && errors.email);
  const isPasswordError = Boolean(touched.password && errors.password);
  const isFormDisabled = !Boolean(dirty && isValid);

  return {
    placeholders,
    names,
    isEmailError,
    isPasswordError,
    isFormDisabled,
    values,
    handleChange,
    handleBlur,
    resetForm,
    errors: { ...errors, serverResponseError },
    submitForm: handleSubmit,
  };
};

export default useSignInForm;
