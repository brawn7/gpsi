import React from 'react';

import '../assets/styles/components/Table.scss';

const Table = ({ children, title }) => (
  <section className="vendors">
    <h3>Lista {title}</h3>
      <div className="table-responsive">
        <div className="add">
          <button>Agregar</button>
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
            </tr>
          </thead>
          <tbody>
            { children }
          </tbody>
        </table>
      </div>
    
  </section>
  
)

export default Table;
