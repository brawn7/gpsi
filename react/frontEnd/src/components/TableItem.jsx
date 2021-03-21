import React from 'react';

const TableItem = ({ id,nombre,razonSocial,direccion,email,telefono,estatus }) => (
  <tr>
    <th scope="row">{id}</th>
    <td>{nombre}</td>
    <td>{razonSocial}</td>
    <td>{direccion}</td>
    <td>{email}</td>
    <td>{telefono}</td>
    <td>{(estatus) ? 'Activo' : 'Baja'}</td>
  </tr>
)

export default TableItem;