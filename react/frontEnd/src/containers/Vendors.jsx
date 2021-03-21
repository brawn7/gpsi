import React, { setState } from 'react';
import Table from '../components/Table';
import RowItem from '../components/RowItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss'

const api = 'http://localhost:3010/vendors';

const Vendor = () => {
  const initialState = useInitialState(api);
  return (
    <>
      <Table title="Proveedores">
        {initialState.map(item =>
          (item != null) ? <RowItem key={item.id} {...item}/> : item
        )}
      </Table>
    </>
  );
};

export default Vendor;
