import React from 'react';
import Table from '../components/Table';
import TableItem from '../components/TableItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3010/vendors'

const Table = () => {
  const initialState = useInitialState(API);
  console.log(initialState)
  return initialState.length === 0 ? <h2>Loading</h2> : (
    <>
    <h1>Hi</h1>
      {initialState.listTable?.length > 0 && (
        <Table>
          {initialState.listTable.map((item)=>{
            <TableItem key={item.id} {...item} />
          })}
        </Table>
      )}
    </>
  )
}

export default Table;