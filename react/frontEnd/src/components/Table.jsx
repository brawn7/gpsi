import React from 'react';

import '../assets/styles/components/Table.scss';

const Table = ({ children }) => {
  <div className="table-responsive">
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Razón Social</th>
          <th scope="col">Dirección</th>
          <th scope="col">E-mail</th>
          <th scope="col">Telefono</th>
          <th scope="col">status</th>
        </tr>
      </thead>
      <tbody>
        { children }
      </tbody>
    </table>
  </div>
}

export default Table;