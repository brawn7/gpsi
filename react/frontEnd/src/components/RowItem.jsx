import React from 'react';

const RowItem = ({ id,nombre,razonSocial,direccion,email,telefono,estatus }) => (
  <tr>
    <th scope="row">{id}</th>
    <td>{nombre}</td>
    <td>{razonSocial}</td>
    <td>{direccion}</td>
    <td>{email}</td>
    <td>{telefono}</td>
    <td>{estatus ? <button disabled="disabled" className="btn btn-success" alt='active'><i className="fas fa-check-square"></i></button> : <button disabled="disabled" className="btn btn-danger" alt='inactive'><i className="far fa-stop-circle"></i></button>}</td>
    <td><button className="btn btn-danger" name="delete"><i className="fas fa-trash"></i></button></td>
  </tr>
)

export default RowItem;