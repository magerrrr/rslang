import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../shared/constants';
import { baseURL } from '../api/urls';
import useGetCurrentUserId from '../hooks/useGetCurrentUserId';
import api from '../api';

type Props = {};

export const EBook = (props: Props) => {
  const history = useHistory();
  
  return (
    <>
      <h1>E-BOOK</h1>
    </>
  );
};
