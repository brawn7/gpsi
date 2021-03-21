/**
 * Patron de diseño: Componentes y Contenedores de Presentación y Composición
 */
import React, { useState } from 'react';

import '../assets/styles/components/Table.scss';

const api = 'http://localhost:3010/vendors';

const Table = props => {
  const [user, setUser] = useState(props.user);
  const submit = e => {
    e.preventDefault()
    fetch(api, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => setUser(json.user))
      .then(() => {
        window.location.replace('')
      })
  }
  return (
    <>
    <section className="vendors">
      <h3>Lista {props.title}</h3>
        <div className="table-responsive">
          <div className="add">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addR">Agregar</button>
          </div>
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
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              { props.children }
            </tbody>
          </table>
        </div>
    </section>
    <div className="modal fade" id="addR" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Nuevo Proveedor</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <form onSubmit={submit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input onChange={e => setUser({ ...user,nombre: e.target.value})} name="nombre" type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Razon Social</label>
              <input onChange={e => setUser({ ...user,razonSocial: e.target.value})} name="razonSocial" type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Dirección</label>
              <input onChange={e => setUser({ ...user,direccion: e.target.value})} name="direccion" type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input onChange={e => setUser({ ...user,email: e.target.value})} name="email" type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input onChange={e => setUser({ ...user,telefono: e.target.value})} name="telefono" type="number" className="form-control" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button onClick={() => console.log('savea')} className="btn btn-primary">Guardar</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default Table;
