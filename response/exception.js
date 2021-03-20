function exception(error){
  let response;
  switch (error) {
    case 0:
      response = {code:400, message:'parametros incompletos'};
      break;
    case 1:
      response = {code:400, message:'parametros con format incorrecto'};
      break;
    case 2:
      response = {code:200, body:'El proveedor que intenta dar de alta, ya esta registrado'};
      break;
    case 3:
      response = {code:200, body:'No existe registro con el ID solicitado'};
      break;
    default:
      console.error({info:'Internal exception',error,error});
      response = {code:500, message:'exception internal'};
      break;
  }
  console.error(response);
  return response;
}

module.exports = {exception};