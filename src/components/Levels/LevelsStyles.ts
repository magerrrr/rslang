import styled from 'styled-components';

import arrow from '../../assets/down-filled-triangular-arrow.svg';

const LevelsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 500px;
  margin: 10px auto;
`;

const Select = styled.select`
  background: #fff url(${arrow}) right 0.75rem center/8px 10px no-repeat;
  background-size: 14px;
  border: 1px solid #ced4da;
  box-shadow: 0 0 10px rgb(166 50 198 / 50%);
  width: 100px;
  margin: 15px;
  &:focus {
    border: 1px solid #ced4da;
    box-shadow: 0 0 10px rgb(166 50 198 / 50%);
  }
`;

export { LevelsContainer, Select };
