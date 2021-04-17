import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../shared/constants';
import { baseURL } from '../api/urls';
import useGetCurrentUserId from '../hooks/useGetCurrentUserId';
import api from '../api';
import styled from 'styled-components';
import { Button, Avatar, withStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

type Props = {};

export const Profile = (props: Props) => {
  const history = useHistory();
  const currentUserId = useGetCurrentUserId();
  const { user } = api.users.getUser(currentUserId);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
    history.push(ROUTES.MAIN.route);
  };

  return (
    <Wrapper>
      <h1>Профиль</h1>

      {user && (
        <ProfileCard>
          <MySpan>
            <Img alt="Avatar" src={`${baseURL}/${user.avatar}`}>
              <AccountCircleIcon />
            </Img>
          </MySpan>
          <h1>{user.name}</h1>
          <AdditionalInfoContainer>
            <MyUL>
              <MyLi>
                <span>
                  <MyStrong>E-mail:</MyStrong>
                  {user.email}
                </span>
              </MyLi>
              <MyLi>
                <span>
                  <MyStrong>ID:</MyStrong>
                  {user.id}
                </span>
              </MyLi>
            </MyUL>
          </AdditionalInfoContainer>

          <StyledButton onClick={handleSignOut}>Выйти из профиля</StyledButton>
        </ProfileCard>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileCard = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled(Avatar)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background-color: rgba(154, 143, 184, 0.7);
  svg {
    width: 100%;
    height: 100%;
  }
`;

const MySpan = styled.span`
  width: 90px;
  height: 90px;
  line-height: 90px;
  font-size: 18px;
  margin: 10px auto 10px;
  display: block;
`;

const AdditionalInfoContainer = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const MyLi = styled.ul`
  padding: 8px 16px;

  &:first-child {
    border-bottom: 1px solid #f0f0f0;
  }
`;

const MyStrong = styled.span`
  margin-right: 5px;
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
