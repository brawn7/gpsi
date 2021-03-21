import React from 'react';

import '../assets/styles/components/notFound.scss'

const notFound = () => {
  return (
    <>
      <h1 className="h1-404">404</h1>
      <p className="p-404">Oops!Algo salio mal</p>
      <a class="button-404" href="#"><i class="icon-home"></i> Regrese a la página inicial.</a>
    </>
  );
};

export default notFound;
