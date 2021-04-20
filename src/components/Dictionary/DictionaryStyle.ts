import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import challenge from '../../assets/img/challenge.png';
import speak from '../../assets/img/speakit.jpg';
import sprint from '../../assets/img/sprint.png';
import savannah from '../../assets/img/savannah.jpg';

export const paneStyles = {
  commonPane: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 200,
    height: 140,
    width: '100%',
    color: '#2A444E',
    textShadow: '1px 1px 2px #fff, 1 1 2em #fff',
    fontSize: '2em',
  },
  savannahContainer: {
    background: `center / cover no-repeat url(${savannah})`,
  },
  speakContainer: {
    background: `center / cover no-repeat url(${speak})`,
  },
  challengeContainer: {
    background: `center / cover no-repeat url(${challenge})`,
  },
  sprintContainer: {
    background: `center / cover no-repeat url(${sprint})`,
  },
  difficulty: {
    flexGrow: 1,
    maxWidth: 500,
    margin: '0 auto',
    boxShadow: 'none',
  },
};

export const CustomButton = styled(Button)`
  margin-bottom: 10px;
  margin-right: 10px;
  &:hover {
    background-color: #f1e8fd !important;
  }
  &.isSelected {
    background-color: #f1e8fd;
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  margin: 50px;
`;
