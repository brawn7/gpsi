import React from 'react';

import '../assets/styles/components/Table.scss';

const Table = ({ children, title }) => {
  return (
    <>
    <section className="vendors">
      <h3>Lista {title}</h3>
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
              { children }
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
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">Razon Social</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">Dirección</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input type="number" className="form-control" id="exampleInputPassword1"/>
            </div>
          </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default Table;
