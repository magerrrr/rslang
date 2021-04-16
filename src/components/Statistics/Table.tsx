import * as React from 'react';
import styled from 'styled-components';
import { Table as BootstrapTable } from 'react-bootstrap';

const Table = ({ data }: any) => {
  return (
    <ResultsTable striped bordered responsive size="sm">
      <thead>
        <tr>
          <th>Выученных</th>
          <th>Угаданных (%)</th>
          <th>Серия верных ответов</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, i: number) => (
          <tr key={i}>
            <td>{item.learned}</td>
            <td>{item.guessed}</td>
            <td>{item.series}</td>
          </tr>
        ))}
      </tbody>
    </ResultsTable>
  );
};

export default Table;

const ResultsTable = styled(BootstrapTable)`
  tbody tr:nth-of-type(odd) {
    background-color: #f1e8fd;
  }
  th {
    font-weight: 500;
  }
`;
