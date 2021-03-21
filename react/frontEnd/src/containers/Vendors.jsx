import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import Table from '../components/Table';
import TableItem from '../components/TableItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss'

const API = 'http://localhost:3010/vendors'

const Vendor = (props) => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h3>Loading</h3> : (
    <>
      <Table title="Proveedores">
        {initialState.map(item =>
          <TableItem key={item.id} {...item}/>
        )}
      </Table>
    </>
  );
};

export default Vendor;
